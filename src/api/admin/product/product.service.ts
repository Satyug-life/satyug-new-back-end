import { Inject, Injectable } from '@nestjs/common';
import { returnError, returnSuccess } from "../../../common/util/response.handler";
import { Product } from './entities/product.entity';
import { Op } from 'sequelize';

@Injectable()
export class ProductService {

  constructor(@Inject("PRODUCT") private product: typeof Product) { }



  async getAllProducts(token, type, limit, offset) {
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
      let condition:any = { isDelete: false }
      if(type != 'all'){
        condition = { ...condition, type }
      }
      if(!token){
        condition = { ...condition, isActive: true, quantity: { [Op.gt]: 0 } }
      }
      const collectData = await this.product.findAndCountAll({
        where: condition,
        raw: true,
        limit: Number(limit),
        offset: Number(offset),
        order: [['updatedAt', 'DESC']],
      });
      if (collectData.rows.length == 0) {
        return returnError(true, 'Products not found');
      }
      return returnSuccess(false, 'Products found successfully', collectData);
    } catch (error) {
      return returnError(true, error?.message, error?.status);
    }
  }


  async remove(id) {
    try {
      const data = await this.updateProduct({ isDelete: true },id);
      if (!data) {
        throw returnError(true, 'Something went wrong', {})
      }
      return returnSuccess(false, 'Product removed successfully', null);
    } catch (error: any) {
      return returnError(true, error?.message, error?.status);
    }
  }
}
