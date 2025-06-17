import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FlavorsService } from './flavors.service';
import {
  CreateFlavorDto,
  FlavorDTO,
  UpdateFlavorDto,
} from 'src/entities/flavor.entity';

@Controller('flavors')
export class FlavorsController {
  constructor(private readonly flavorsService: FlavorsService) {}
  @Get()
  findAll() {
    return this.flavorsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flavorsService.findOne(id);
  }
  @Post()
  create(@Body() flavor: CreateFlavorDto) {
    return this.flavorsService.create(flavor);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() flavor: UpdateFlavorDto) {
    return this.flavorsService.update(id, flavor);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flavorsService.remove(id);
  }
}
