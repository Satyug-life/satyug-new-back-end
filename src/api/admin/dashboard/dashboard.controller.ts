import { Controller, Get, Response, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { successResponse, failResponse } from '../../../common/util/response.handler';
import { AuthGuard } from '@nestjs/passport';

@Controller('admin/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @UseGuards(AuthGuard("jwt"))
  async getDashboard (@Response() response: any) {
    try {
      const resp: any = await this.dashboardService.getDashboardCards();
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  
}
