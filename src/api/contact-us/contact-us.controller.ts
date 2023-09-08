import { Controller, Get, Post, Body, Response, Param, UseGuards } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { successResponse, failResponse } from '../../common/util/response.handler';
import { AuthGuard } from '@nestjs/passport';

@Controller('contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Post()
  async contactus(@Body() data: any, @Response() response: any) {
    try {
      const resp: any = await this.contactUsService.contact(data);
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
      const resp: any = await this.contactUsService.getAdminAllContact(limit, offset);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

}
