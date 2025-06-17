import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Flavor } from './flavor.entity';
export class Coffee {
  id?: string;
  name?: string;
  brandName?: string;
  flavors?: Flavor[];
}

export class CoffeDTO {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brandName: string;
  // @IsString({ each: true })
  // readonly flavors: string[];
  @IsString()
  readonly flavorId: string;
}

export class CreateCoffeDto extends PartialType(CoffeDTO) {}
export class UpdateCoffeeDto extends PartialType(CoffeDTO) {}
