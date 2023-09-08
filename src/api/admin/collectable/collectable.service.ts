import { Inject, Injectable } from '@nestjs/common';
import { Collectable } from './entities/collectable.entity';
import { returnError, returnSuccess } from "../../../common/util/response.handler";

@Injectable()
export class CollectableService {
  constructor(@Inject("COLLECTABLE") private collectionRepo: typeof Collectable){}

  

  async getCollectiveById(id: string){
    try{
      const collectData = await this.collectionRepo.findAll({ where: { id, isActive: true }, raw: true });
      if(collectData.length == 0){
        return returnError(true, 'Collection not found');
      }
      return returnSuccess(false, 'Collection found successfully', collectData);
    }catch(error){
      return returnError(true, error?.message, error?.status); 
    }
  }



  async getAllCollectiveData() {
    try{
      const collectData = await this.collectionRepo.findAll({ where: { isActive: true }, raw: true });
      if(collectData.length == 0){
        return returnError(true, 'Collection not found');
      }
      return returnSuccess(false, 'Collection found successfully', collectData);
    }catch(error){
      return returnError(true, error?.message, error?.status); 
    }
  }

  async collectiveCount() {
    try{
      const collectData = await this.collectionRepo.count({ where: { isActive: true } });
      return returnSuccess(false, 'Collection found successfully', collectData);
    }catch(error){
      return returnError(true, error?.message, error?.status); 
    }
  }
}
