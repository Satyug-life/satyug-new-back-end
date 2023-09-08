import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { returnError, returnSuccess } from "../../common/util/response.handler";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { Auth } from './entities/auth.entity';
import { Op } from 'sequelize';
import { sendEmail } from '../../common/util/Utility';
const maxOtpCount: any = process.env.MAX_OTP_COUNT;
@Injectable()
export class AuthService {

  constructor(
    @Inject("AUTH") private auth: typeof Auth,
    private readonly jwtService: JwtService,
  ) { }

  public async comparePassword(enteredPassword, dbPassword) {
    try {
      const match = await bcrypt.compare(enteredPassword, dbPassword);
      return match;
    } catch (error) {
      return returnError(true, error?.message, error?.status);
    }
  }

  async validateUserByJwt(id: string): Promise<any> {
    try {
      const response = await this.auth.findOne({
        attributes: ["id", "email", "jwtToken"],
        where: {
          id: id,
          isActive: true,
          jwtToken: {
            [Op.not]: null,
          },
        },
      });
      if (!response) throw returnError(true, 'User not found');
      return response;
    } catch (error: any) {
      return returnError(true, error?.message, error?.status);
    }
  }

  async findOneByKeys(data: any): Promise<any> {
    try {
      const response = await this.auth.findOne({
        attributes: [
          "id",
          "email",
          "password",
          "phoneNumber"
        ],
        where: data,
        raw: true,
      });
      if (!response) return returnError(true, 'User not found');
      // return response;
      return returnSuccess(false, 'User found successfully', response);
    } catch (error: any) {
      return returnError(true, 'User not found');
    }
  }

  async validateUser(email: string, password: string) {
    try {
      // CHECK USER EXIST OR NOT
      const user = await this.findOneByKeys({ email });
      if (user?.error) throw returnError(true, 'Invalid email or password');


      const match = await this.comparePassword(
        password,
        user?.data?.password
      );
      if (!match) throw returnError(true, 'Invalid email or password');
      return returnSuccess(false, 'User profile fetched successfully', user?.data);

    } catch (error: any) {
      return returnError(true, error?.message, error?.status);
    }
  }

  /**user login  */
  public async login(user: any) {
    try {
      let { email, password } = user;
      const validUser = await this.validateUser(email, password);
      if (validUser?.error) {
        throw returnError(true, validUser?.message);
      }
      const userId = validUser?.data.id;

      const token = await this.generateToken({
        id: userId,
        role: validUser?.data?.userRole,
      });
      // console.log(token, userId, "userId");

      await this.updateUserByKey(
        { id: validUser?.data?.id },
        { jwtToken: token }
      );

      return returnSuccess(false, 'Login successfully', { token });

    } catch (error) {
      return returnError(true, error?.message, error?.status);
    }
  }

  async updateUserByKey(key: any, data: any): Promise<any> {
    try {
      const updatedUser = await this.auth.update(
        { ...data },
        { where: key }
      );
      if (!updatedUser) {
        throw returnError(true, 'User not found');
      }
      return updatedUser;
    } catch (error: any) {
      return returnError(true, error.errors[0].message);
    }
  }

  /**generate authentication token */
  public async generateToken(payload: any) {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  async changePassword(data: any, user: any): Promise<any> {
    try {
      const dbOldPassword = await this.auth.findOne({
        attributes: ["password"],
        where: {
          id: user.id,
        },
        raw: true,
      });
      if (data?.confirmPassword != data?.newPassword)
        throw returnError(true, 'Your confirm password is not matching with new password.');
      const match = await this.comparePassword(
        data?.oldPassword,
        dbOldPassword?.password
      );
      if (!match) throw returnError(true, 'Your old password is incorrect.');
      const hash = await bcrypt.hash(data.newPassword, 10);
      const response = await this.auth.update(
        {
          password: hash,
        },
        {
          where: {
            id: user.id,
          },
        }
      );
      if (response[0] === 0) throw returnError(true, 'Something went wrong');
      return response;
    } catch (err) {
      return returnError(true, err.message);
    }
  }

  async forgotPassword(data: any): Promise<any> {
    try {
      if (!data?.email) {
        throw returnError(true, 'email is required!');
      }
     
      // CHECK USER EXIST OR NOT
      const user = await this.findOneByKeys({email: data?.email});
      if (user?.error) throw returnError(false, 'Invalid email address', null);
      if (data?.email !== user?.data?.email)
        throw returnError(false, 'Invalid email address', null);
      
        const sendOtpResponse: any = await this.sendOtpAction(
          user?.data,
        );
        if (sendOtpResponse?.error) {
          throw returnError(true, sendOtpResponse?.message);
        }
        const dataInfo = {
          otpCount: sendOtpResponse?.data,
          userId: user?.data?.id,
        };
        return returnSuccess(
          false,
          'An OTP is sent to your email.',
          dataInfo
        );
     
    } catch (err) {
      return returnError(true, err.message, err?.status);
    }
  }

  async sendOtpAction(data: any) {
    try {
      const { id, email } = data

      const getOtpDeatils = await this.getOtpDetails({
        id,
      });
      if (!getOtpDeatils || +getOtpDeatils?.otpCount < maxOtpCount) {
        //OTP RETRY COUNT AVAILABLE
        const otpValue: any = await this.generateOtp();
        const setOtpCount = getOtpDeatils ? +getOtpDeatils?.otpCount + 1 : 1;
        const otpUpdated = await this.auth.update(
          {
            otp: otpValue,
            otpCount: setOtpCount
          },
          {
            where: { id }
          }
        )
        if (otpUpdated[0] !== 1) throw returnError(true, 'Something went wrong!');
        const resp = await sendEmail(email,otpValue.toString());
        console.log("resp----", resp)
        return returnSuccess(false, 'An OTP is sent to your email', setOtpCount);
      }
      else {
        return returnError(true, 'You have reached your otp limit. Please try again after one hour.');
      }
    } catch (err) {
      return returnError(true, err.message);
    }
  }

  async getOtpDetails(data: any): Promise<any> {
    try {
      const response = await this.auth.findOne({
        where: { ...data },
        raw: true,
        // order: [["createdAt", "DESC"]],
      });
      return response;
    } catch (error: any) {
      return returnError(true, error.message, error.status);
    }
  }

  async generateOtp() {
    try {
      const otpCode: number = Math.floor(100000 + Math.random() * 900000);
      return otpCode;
    } catch (error: any) {
      return returnError(true, error.message);
    }
  };


  async getOtpByid(data) {
    try {
      const OtpFromDb = await this.auth.findOne({
        attributes: ["otp", "otpCount"],
        where: {
          id: data,
        },
        raw: true,
        order: [["createdAt", "DESC"]],
      });
      return OtpFromDb;

    } catch (error) {
      return returnError(true, error.message);
    }
  }

  async logout(id: string) {
    try {
      await this.auth.update(
        {
          jwtToken: null,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return returnSuccess(false, 'Logout successfully', {});
    } catch (error) {
      return returnError(true, error?.message, error?.status);
    }
  }
}
