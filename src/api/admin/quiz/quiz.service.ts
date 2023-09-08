import { Inject, Injectable } from '@nestjs/common';
import { Quiz } from './entities/quiz.entity';
import { returnError, returnSuccess } from "../../../common/util/response.handler";

@Injectable()
export class QuizService {

  constructor(@Inject("QUIZ") private quiz: typeof Quiz){}

  async getQuestion(questionId){
    try {
      // CREATE COLLECTION
      const data = await this.quiz.findOne({where: { id: questionId, isActive: true }, raw: true});
      if(!data){
        throw returnError(true, 'Quiz question not found')
      }
      return returnSuccess(false, 'Quiz question found successfully', data);
    } catch (error: any) {
      return returnError(true, error?.message, error?.status);
    }
  }

  async getFiveQuestions(){
    try {
      // CREATE COLLECTION
      const data = await this.quiz.findAll({
        attributes: ['id', 'question', 'options'],
        where: { isActive: true }, raw: true, limit: 1, order: [['createdAt', 'DESC']]
      });
      if(!data){
        throw returnError(true, 'Quiz question not found')
      }
      return returnSuccess(false, 'Quiz question found successfully', data);
    } catch (error: any) {
      return returnError(true, error?.message, error?.status);
    }
  }

  async create(createQuizDto: any) {
    try {
      // CREATE COLLECTION
      const data = await this.quiz.create(createQuizDto);
      if(!data){
        throw returnError(true, 'Something went wrong', {})
      }
      return returnSuccess(false, 'Quiz question create successfully', data);
    } catch (error: any) {
      return returnError(true, error?.message, error?.status);
    }
  }

  async findAll(limit, offset) {
    try {
      if (!Number(limit)) {
        throw returnError(true, 'limit must be a number');
      }
      if (limit > 100) {
        throw returnError(true, 'limit must be less than 100');
      }
      if (limit > -1) {
        if (offset < 1) {
          offset = 1;
        }
        offset = (offset - 1) * limit;
      }
      const data = await this.quiz.findAndCountAll({
        where: { isActive: true },
        raw: true,
        limit: Number(limit),
        offset: Number(offset),
        order: [['updatedAt', 'DESC']]});
      if(!data){
        throw returnError(true, 'Something went wrong', {})
      }
      let message = "Quiz question not found";
      if(data.rows.length > 0){
        message = "Quiz question found successfully"
      }
      return returnSuccess(false, message, data);
    } catch (error: any) {
      return returnError(true, error?.message, error?.status);
    }
  }

  async remove(id) {
    try {
      const data = await this.quiz.destroy({where: { id }});
      if(!data){
        throw returnError(true, 'Something went wrong', {})
      }
      return returnSuccess(false, 'Question delete successfully', data);
    } catch (error: any) {
      return returnError(true, error?.message, error?.status);
    }
  }
}
