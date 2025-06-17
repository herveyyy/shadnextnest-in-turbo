import { IsString } from 'class-validator';

export class Flavor {
  id: string;
  name: string;
  description: string;
}
export class FlavorDTO {
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;
}

export class CreateFlavorDto extends FlavorDTO {}
export class UpdateFlavorDto extends FlavorDTO {}
