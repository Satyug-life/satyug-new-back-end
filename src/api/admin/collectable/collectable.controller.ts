import { Controller, Get, Post, Body, Patch, Param, Delete, Response, Request, UseGuards } from '@nestjs/common';
import { CollectableService } from './collectable.service';
import { failResponse, successResponse } from '../../../common/succes-handler/response-handler';
import { AuthGuard } from '@nestjs/passport';

@Controller('collectable')
// @UseGuards(AuthGuard("jwt"))
export class CollectableController {
  constructor(private readonly collectableService: CollectableService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  async create(@Body() createAdminDto: any, @Response() response: any) {
    try {
      const resp: any = await this.collectableService.create(createAdminDto);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Get()
  async findAll(@Response() response: any) {
    try {
      const resp: any = await this.collectableService.getAllCollectiveData();
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }
}
