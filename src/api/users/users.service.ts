import { Inject, Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { returnError, returnSuccess } from "../../common/util/response.handler";
import { MyService } from "../../common/helper/redis/redis.service";
import { CollectableService } from "../admin/collectable/collectable.service";
import { UserCollectible } from "./entities/userCollectible.entity";
import { Collectable } from "../admin/collectable/entities/collectable.entity";
import { KarmaPoints } from "./entities/karmaPoints.entity";
import sequelize, { Op } from "sequelize";
import { QuizService } from "../admin/quiz/quiz.service";
import {
  generateOtp,
  generateRandomString32,
  sendEmail,
} from "../../common/util/Utility";
import { LeaderPoints } from "./entities/leaderPoints.entity";
import { ARTIVIVE_IMAGE, GAME_TOKEN, OTP_TYPE } from "../../constants/enums";
const axios = require("axios");
const Jimp = require("jimp");
import * as path from "path";
import {FileService} from '../file/file.service';
const fs = require('fs');

@Injectable()
export class UsersService {

  constructor(
    @Inject("USER") private user: typeof User,
    private readonly cacheService: MyService,
    private readonly collectableService: CollectableService,
    @Inject("USER_COLLECTIBLE") private userCollectible: typeof UserCollectible,
    @Inject("COLLECTABLE") private collectable: typeof Collectable,
    @Inject("KARMA_POINTS") private karmaPoints: typeof KarmaPoints,
    private readonly quizService: QuizService,
    @Inject("LEADER_POINTS") private leaderPoints: typeof LeaderPoints,
    private readonly fileService: FileService,
  ) {
    console.log("this.filrService----", this.fileService)
  }

  public onModuleInit() {
    this.user.hasMany(this.userCollectible, { foreignKey: "userId" });
    this.userCollectible.belongsTo(this.collectable, { foreignKey: "id" });
    this.userCollectible.belongsTo(this.collectable, {
      foreignKey: "collectibleId",
    });
    this.user.hasMany(this.karmaPoints, { foreignKey: "userId" });
  }

  async getAllUsersCount() {
    try {
      const user = await this.user.count();
      return returnSuccess(false, "User  found successfully", user);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async generateToken() {
    try {
      return (Math.random() + 1).toString(36).substring(2);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }


  async validateGameKeyInRedis(data) {
    try {
      const token = await this.cacheService.get(data?.id);
      console.log(
        "token && GAME_TOKEN.GameAccessToken != token--",
        data,
        token,
        GAME_TOKEN[data?.type],
        data?.type
      );
      if (!token || GAME_TOKEN[data?.type] != token) {
        throw returnError(true, "Invalid token.");
      }
      if (!GAME_TOKEN[data?.type]) {
        throw returnError(true, "Invalid token type");
      }
      // DELETE PREVIOUS GAME TOKEN
      // await this.cacheService.delete(data?.id);
      let collectiveToken = null;
      console.log("GAME_TOKEN[data?.type]----", GAME_TOKEN[data?.type]);
      if (GAME_TOKEN[data?.type] === GAME_TOKEN.GameVerifyToken) {
        // CREATE AND SET COLLECTIVE TOKEN
        collectiveToken = await this.generateToken();
        await this.cacheService.set(
          collectiveToken,
          GAME_TOKEN[data?.type],
          900
        );
        collectiveToken = { token: collectiveToken };
      }

      return returnSuccess(
        false,
        "Token validate successfully",
        collectiveToken
      );
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await this.user.findOne({ where: { email }, raw: true });
      if (!user) {
        throw returnError(true, "User not found");
      }
      return returnSuccess(false, "User  found successfully", user);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async getUserCollectiveData(userId) {
    try {
      const userCollective = await this.userCollectible.findAll({
        where: { userId },
        raw: true,
      });
      if (!userCollective) {
        throw returnError(true, "User collective not found");
      }
      return returnSuccess(
        false,
        "User collective found successfully",
        userCollective
      );
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async saveCollectiveAfterPlayGame(data) {
    try {
      console.log(
        "GAME_TOKEN.GameVerifyToken------",
        GAME_TOKEN.GameVerifyToken
      );
      const token = await this.cacheService.get(data?.token);
      if (!token || token != GAME_TOKEN.GameVerifyToken) {
        throw returnError(true, 'Your session is expired.');
      }
      // GET RANDOM STRING
      let id;
      // GET COLLECTIVE
      const user = await this.getUserByEmail(data?.email);
      let userId;
      if (user?.error) {
        id = await generateRandomString32();
        // CREATE NEW USER
        data.uid = id;
        data.image =
          "https://satyug-bucket.s3.amazonaws.com/satyug-bucket/user.png";
        const userData = await this.user.create(data);
        userId = userData?.dataValues?.userId;
      } else {
        id = user?.data?.uid;
        userId = user?.data?.userId;
        // UPDATE GAME PLAYED
        let play = +user?.data?.gamesPlayed + 1;
        await this.user.update({ gamesPlayed: play }, { where: { userId } });
      }
      // DELETE TOKEN
      // await this.cacheService.delete(data?.token);
      // VERIFY COLLECTIVE ACTIVE OR NOT
      const collectiveData = await this.collectableService.getCollectiveById(
        data?.collectiveId
      );
      if (collectiveData?.error) {
        throw returnError(true, collectiveData?.message);
      }
      console.log("collectiveData-------", collectiveData);
      let assetId = await generateRandomString32(16);
      const imgData = {
        image: collectiveData?.data[0].artivive,
        srNo: collectiveData?.data[0].srNo,
        name: data?.name,
        assetId,
      };
      console.log("imgData-------", imgData);
      let s3ImageResp:any;
      const imgResp = await this.rewriteImage(imgData);
      console.log("imgResp------", imgResp)
      if(imgResp?.error){
        throw imgResp
      }
      return returnSuccess(
        false,
        "User register successfully, please check your email.",
        { userId, userKey: id }
      );
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async rewriteImage(data) {
    try {
      let fileName = `${data?.assetId}.jpg`;
      let userName = data?.name;
      let userId = data?.assetId;
      const filePath = path.join(__dirname,'../../assets/images/');     
      console.log("loadedImage------------", fileName, userName, userId, ARTIVIVE_IMAGE[data?.srNo], filePath)
      let loadedImage;
      const imagePath = await Jimp.read(filePath+ARTIVIVE_IMAGE[data?.srNo])
        .then(function (image) {
          loadedImage = image;
          return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
        })
        .then(async function (font) {
          if (data?.srNo == 1) {
            loadedImage.print(font, 1510, 1870, userName)
            // loadedImage.print(font, 1550, 1880, userName);
            // loadedImage.print(font, 1550, 1920, userId);
          } else if (data?.srNo == 2) {
            loadedImage.print(font, 950, 970, userName)
            // loadedImage.print(font, 970, 990, userName);
            // loadedImage.print(font, 970, 1030, userId);
          } else if (data?.srNo == 3) {
            loadedImage.print(font, 2450, 1350, userName)
            // loadedImage.print(font, 2490, 1350, userName);
            // loadedImage.print(font, 2490, 1390, userId);
          } else if (data?.srNo == 4) {
            loadedImage.print(font, 360, 620, userName)
            // loadedImage.print(font, 380, 620, userName);
            // loadedImage.print(font, 380, 680, userId);
          } else if (data?.srNo == 5) {
            loadedImage.print(font, 2140, 1170, userName)
            // loadedImage.print(font, 2180, 1180, userName);
            // loadedImage.print(font, 2180, 1230, userId);
          }
          // loadedImage.print(font, 2230, 1920, 'Collective: '+userId)
          loadedImage.print(font, 2230, 1920, 'Collective id: ')
          loadedImage.print(font, 2230, 1990, userId)
          loadedImage.resize(3160, 2154).quality(70)
          loadedImage.write(filePath+fileName);
          console.log("Image Processing Completed");
          return filePath+fileName
        })
        .catch(function (err) {
          console.error(err);
          this.rewriteImage(data)
        }); 
        return returnSuccess(false, 'Image create successfully', imagePath); 
        
    } catch (error) {
      return returnError(true, error.message);
    }
  }

  async getUserAllCollective(userId, limit = 10, offset = 1) {
    try {
      if (!Number(limit)) {
        throw returnError(true, "limit must be a number");
      }
      if (limit > 100) {
        throw returnError(true, "limit must be less than 100");
      }
      if (limit > -1) {
        if (offset < 1) {
          offset = 1;
        }
        offset = (offset - 1) * limit;
      }
      // VERIFY USER
      const user = await this.user.findOne({
        where: { userId: userId, isActive: true },
        raw: true,
      });
      if (!user) {
        throw returnError(true, "User not found");
      }
      let collectData: any = await this.userCollectible.findAndCountAll({
        attributes: ["userId", "assetKey", "updatedAt"],
        include: [
          {
            model: this.collectable,
            attributes: ["id", "title", "image", "description"],
          },
        ],
        where: { userId, isActive: true },
        limit: Number(limit),
        offset: Number(offset),
        order: [["updatedAt", "DESC"]],
      });

      let userR: any = await this.user.findOne({
        attributes: [
          [
            sequelize.literal(
              `(select sum(points) as point from KarmaPoints where userId = User.userId) `
            ),
            "karmaPoint",
          ],
          [
            sequelize.literal(
              `(select sum(points) as point from LeaderPoints where userId = User.userId) `
            ),
            "leaderPoints",
          ],
        ],
        where: { userId, isActive: true },
        raw: true,
        // group: 'karmaPoint'
      });
      collectData = { ...collectData, ...userR };
      let message = "User collective found successfully";
      if (collectData.rows.length === 0) {
        message = "Collective not found";
      }
      return returnSuccess(false, message, collectData);
    } catch (error) {
      return returnError(true, error?.message, error?.status);
    }
  }

  async updateUserByAdmin(id, data) {
    try {
      const isActive = data.status === "active" ? true : false;
      const message =
        data.status === "active"
          ? "User active successfully"
          : "User blocked successfully";
      const userCollective = await this.user.update(
        { isActive, status: data?.status },
        { where: { userId: id } }
      );
      if (!userCollective) {
        throw returnError(true, "Something went wrong");
      }
      return returnSuccess(false, message, null);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async sendMessage(data) {
    const config = {
      method: "POST",
      url: `https://api.dotpe.in/api/comm/public/enterprise/v1/wa/send`,
      headers: {
        "dotpe-api-key": `${process.env.DOT_API_KEY}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };
    console.log("send message running", config);
    const x = axios(config)
      .then((resp) => {
        console.log(resp.data, "response");
      })
      .catch((error) => {
        console.log(error, "error occured");
      });
    return x;
  }

  async checkUserLeaderPoints(userId) {
    try {
      const leaderPointResp = await this.leaderPoints.findAll({
        where: { userId },
        raw: true,
      });
      if (leaderPointResp.length == 0) {
        throw returnError(true, "Points not found");
      }
      return returnSuccess(false, "User points found successfully", null);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async verifyQuizAnswer(data) {
    try {
      const { question, answer, userId } = data;
      const questionResp = await this.quizService.getQuestion(question);
      const correctAnswer =
        questionResp?.data?.options[questionResp?.data?.answer];
      if (questionResp?.error) {
        throw returnError(true, questionResp?.message);
      }
      // CHECK ANSWER
      if (answer.toLowerCase() !== (questionResp?.data?.answer).toLowerCase()) {
        throw returnError(false, "Invalid answer.", 400, correctAnswer);
      }
      // CHECK LEADER POINTS
      const points = await this.checkUserLeaderPoints(userId);
      if (points?.error) {
        // SAVE LEADER BOARD POINTS
        await this.leaderPoints.create({
          userId,
          points: process.env.LEADER_BOARD_POINTS,
        });
      }
      return returnSuccess(false, "Your answer is correct.", null);
    } catch (error: any) {
      return returnError(true, error.message, error?.status, error?.data);
    }
  }

  async getQuizQuestions() {
    try {
      const questionResp = await this.quizService.getFiveQuestions();
      if (questionResp?.error) {
        throw returnError(true, questionResp?.message);
      }
      return returnSuccess(
        false,
        "Question found successfully.",
        questionResp?.data
      );
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async verifyEmail(data) {
    try {
      const user = await this.getUserByEmail(data?.email);
      if (user?.error)
        throw returnError(false, "Please enter registered email address", null);
      const otpCount = await this.cacheService.get(data?.email + "-count");
      if (otpCount != null && otpCount <= 0) {
        throw returnError(true, "You have reached your otp limit");
      }
      // SEND OTP
      const otpCode = await generateOtp();
      sendEmail(data?.email, otpCode.toString());
      let remainOtpCount = otpCount ?? Number(process.env.MAX_OTP_COUNT);
      await this.cacheService.set(
        data?.email + "-count",
        Number(remainOtpCount) - 1,
        900
      );
      await this.user.update(
        { otp: otpCode },
        { where: { email: data?.email } }
      );
      return returnSuccess(false, "OTP send successfully", null);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }


  async verifyUserById(userId) {
    try {
      const user = await this.user.findOne({
        where: { uid: userId },
        raw: true,
      });
      if (!user) {
        throw returnError(true, "User not found");
      }
      // SEND OTP
      const otpCode = await generateOtp();
      sendEmail(user?.email, otpCode.toString());
      await this.user.update(
        { otp: otpCode },
        { where: { email: user?.email } }
      );
      return returnSuccess(false, "Please check your email for otp", {
        email: user?.email,
      });
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async addKarmaPoints(id, type, ip) {
    try {
      const user = await this.user.findOne({ where: { uid: id }, raw: true });
      if (!user) {
        throw returnError(true, "User not found");
      }
      // VALIDATE KARMA POINTS
      const points = await this.karmaPoints.findAll({
        where: { userId: user?.userId, ip: ip },
      });
      if (points.length === 0) {
        await this.karmaPoints.create({
          userId: user?.userId,
          ip: ip,
          points: process.env.KARMA_POINTS,
        });
      }
      return returnSuccess(false, "Karma points add successfully", null);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }
}
