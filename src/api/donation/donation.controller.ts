import { Controller, Post, Body, Response, Patch, Param, Get, UseGuards } from '@nestjs/common';
import { DonationService } from './donation.service';
import { successResponse, failResponse } from '../../common/util/response.handler';
import { AuthGuard } from '@nestjs/passport';

@Controller('donation')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  async donate(@Body() data: any, @Response() response: any) {
    try {
      const resp: any = await this.donationService.donate(data);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }


  @Get("/:limit/:offset")
  @UseGuards(AuthGuard("jwt"))
  async getAdminAllDonations(@Param() { limit, offset }: any, @Response() response: any) {
    try {
      const resp: any = await this.donationService.getAdminAllDonations(limit, offset);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }
 
}
