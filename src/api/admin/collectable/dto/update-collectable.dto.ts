import { PartialType } from '@nestjs/mapped-types';
import { CreateCollectableDto } from './create-collectable.dto';

export class UpdateCollectableDto extends PartialType(CreateCollectableDto) {}
