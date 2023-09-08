import { Controller, Get, Post, Body, Patch, Param, Response, UseGuards, Ip, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { failResponse, successResponse } from '../../common/succes-handler/response-handler';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post("validate-token")
  async validateGameToken(@Body() data: string, @Response() response: any) {
    try {
      const resp: any = await this.usersService.validateGameKeyInRedis(data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Post("collective")
  async userCollective(@Body() data: string, @Response() response: any) {
    try {
      const resp: any = await this.usersService.saveCollectiveAfterPlayGame(data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Get("collective/:id/:limit/:offset")
  async getAllUserCollective(@Param() { id, limit, offset }: any, @Response() response: any) {
    try {
      const resp: any = await this.usersService.getUserAllCollective(id, limit, offset);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Get("/:id")
  async getUserCollective(@Param() { id }: any, @Response() response: any) {
    try {
      const resp: any = await this.usersService.getUserAllCollective(id);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Post("verify")
  async validateUserId(@Body() { userId }: any, @Response() response: any) {
    try {
      const resp: any = await this.usersService.verifyUserById(userId);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Patch("/:id")
  @UseGuards(AuthGuard("jwt"))
  async updateUserByAdmin(@Param() { id }: any, @Body() data: any, @Response() response: any) {
    try {
      const resp: any = await this.usersService.updateUserByAdmin(id, data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  // @Get()
  // async test(@Response() response: any) {
  //   try {
  //     const resp: any = await this.usersService.sendWhatsappMessage();
  //     if (resp?.error) throw resp;
  //     return successResponse(resp?.message, resp?.data, response);
  //   } catch (error) {
  //     return failResponse(true, error?.message, response);
  //   }
  // }

  @Post("/validate-quiz-answer")
  async validateQuizAnswer(@Body() data: any, @Response() response: any) {
    try {
      const resp: any = await this.usersService.verifyQuizAnswer(data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response, error?.status, error?.data);
    }
  }

  @Post("questions")
  async getQuizQuestions(@Response() response: any) {
    try {
      const resp: any = await this.usersService.getQuizQuestions();
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Post("verify-email")
  async validateEmail(@Body() data: string, @Response() response: any) {
    try {
      const resp: any = await this.usersService.verifyEmail(data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }


  @Post("karmaPoints")
  async karmaPointsAfterShare(@Body() { id, type }: any, @Response() response: any, @Request() request) {
    try {
      const resp: any = await this.usersService.addKarmaPoints(id, type, request.ip);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

}
