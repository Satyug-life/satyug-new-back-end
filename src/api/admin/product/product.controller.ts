import { Controller, Get, Post, Body, Patch, Param, Delete, Response, UseGuards, Headers } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { failResponse, successResponse } from '../../../common/succes-handler/response-handler';
import { AuthGuard } from '@nestjs/passport';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}


  @Get("/:type/:limit/:offset")
  async findAll(@Param() { type, limit, offset }: any, @Headers() header: any, @Response() response: any) {
    try {
      console.log("header------", header?.authorization)
      const token = header?.authorization ?? null;
      const resp: any = await this.productService.getAllProducts(token, type, limit, offset);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Get("/:id")
  async getProductById(@Param() { id }: any, @Response() response: any) {
    try {
      const resp: any = await this.productService.getProductByKey({id});
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Patch('product/:id')
  @UseGuards(AuthGuard("jwt"))
  async update(@Param('id') id: string, @Body() productData: any, @Response() response: any) {
    try {
      const resp: any = await this.productService.update(id, productData);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard("jwt"))
  async remove(@Param('id') id: string, @Response() response: any) {
    try {
      const resp: any = await this.productService.remove(id);
      if (resp?.error) throw resp;
      return successResponse(resp?.message, resp?.data, response);
    } catch (error) {
      return failResponse(true, error?.message, response);
    }
  }
}
