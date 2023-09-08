import { Controller, Post, Body, Response, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { successResponse, failResponse } from '../../common/util/response.handler';
import { AuthGuard } from '@nestjs/passport';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

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

}
