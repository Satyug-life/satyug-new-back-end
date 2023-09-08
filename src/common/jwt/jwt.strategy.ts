import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from '../../api/auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly auth: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  async validate(payload: any) {
    if (payload) {
      // check if user in the token actually exist
      const user = await this.auth.validateUserByJwt(payload?.id);

      if (!user) {
        throw new UnauthorizedException(
          "You are not authorized to perform the operation"
        );
      }
      if (!user?.jwtToken) {
        throw new UnauthorizedException(
          "You are session is expired. Please login again."
        );
      }
    }

    return payload;
  }
}
