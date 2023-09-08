import { Controller, Post, Body, Patch, Response, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { failResponse, successResponse } from '../../common/succes-handler/response-handler';
import { Auth } from './entities/auth.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../common/jwt/jwt.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async loginAdmin(@Body() createAuthDto: CreateAuthDto, @Response() response: any) {
    try {
      const resp: any = await this.authService.login(createAuthDto);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Patch("changePassword")
  @UseGuards(AuthGuard("jwt"))
  async changePassword(
    @GetUser() user: Auth,
    @Body() data: any,
    @Response() response: any
  ): Promise<any> {
    try {
      const result = await this.authService.changePassword(data, user);
      if (result?.error) {
        throw result;
      }
      return successResponse('Password update successfully', {}, response);
    } catch (err) {
      return failResponse(true, err.message, response);
    }
  }

  @Post("forgotPassword")
  async forgotPassword(@Body() data: any, @Response() response: any ) {
    try {
      const result = await this.authService.forgotPassword(data);
      if (result?.error) throw result;
      return successResponse(result?.message, result?.data, response);
    } catch (err) {
      return failResponse(true, err?.message, response);
    }
  }


  @Post("logout")
  @UseGuards(AuthGuard("jwt"))
  async logout(
    @GetUser() user: Auth,
    @Response() response: any
  ): Promise<any> {
    try {
      await this.authService.logout(user?.id);
      return successResponse('Logout successfully', {}, response);
    } catch (err) {
      return failResponse(true, err.message, response);
    }
  }
}
