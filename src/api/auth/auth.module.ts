import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from "./../../common/jwt/jwt.strategy";
import { UsersModule } from '../users/users.module';
import { JwtModule } from "@nestjs/jwt";
import { AuthProviders } from './entities/auth.providers';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, ...AuthProviders],
  exports: [AuthService, JwtStrategy]
})
export class AuthModule {}
