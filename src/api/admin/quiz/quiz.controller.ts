import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Response } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { failResponse, successResponse } from '../../../common/succes-handler/response-handler';
import { AuthGuard } from '@nestjs/passport';

@Controller('quiz')
@UseGuards(AuthGuard("jwt"))
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  async create(@Body() createQuizDto: any, @Response() response: any) {
    try {
      const resp: any = await this.quizService.create(createQuizDto);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Get("/:limit/:offset")
  async findAll(@Param() { limit, offset }: any, @Response() response: any) {
    try {
      const resp: any = await this.quizService.findAll(limit, offset);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Response() response: any) {
    try {
      const resp: any = await this.quizService.remove(id);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }
}
