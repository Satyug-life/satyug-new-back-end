import { Controller, Post, Body, Response, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { successResponse, failResponse } from '../../common/util/response.handler';
import { AuthGuard } from '@nestjs/passport';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  async create(@Body() data: any, @Response() response: any) {
    try {
      const resp: any = await this.ordersService.createOrder(data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Post("thali")
  async createThali(@Body() data: any, @Response() response: any) {
    try {

      const resp: any = await this.ordersService.createThali(data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Post("thali/:limit/:offset")
  async getThaliList(@Param() { limit, offset }: any, @Body() body: any, @Response() response: any) {
    try {
      const data = { limit, offset, search: body?.search }
      const resp: any = await this.ordersService.getThaliList(data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }


  @Patch("thaliStatus/:id")
  async updateThalistatus(@Param() { id }: any, @Body() data: any, @Response() response: any) {
    try {
      const resp: any = await this.ordersService.updateThalistatus(id, data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Post('webhook')
  async WebHookPayment(@Body() data: any, @Response() response: any) {
    try {
      const resp: any = await this.ordersService.WebHookPayment(data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }


  @Post('freeThali')
  async freeThali(@Body() data: any, @Response() response: any) {
    try {
      const resp: any = await this.ordersService.freeThali(data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

}
