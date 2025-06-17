import { Body, Injectable, NotFoundException, Res } from '@nestjs/common';
import { CoffeDTO, UpdateCoffeeDto } from '../entities/coffee.entity';
import { CoffeesRepository } from './coffees.repository';

@Injectable()
export class CoffeesService {
  constructor(private readonly coffeeRespority: CoffeesRepository) {}

  findAll() {
    return this.coffeeRespority.all();
  }

  findOne(id: string) {
    const coffee = this.coffeeRespority.find(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }
  create(@Body() createCoffeeDto: CoffeDTO) {
    const coffee = this.coffeeRespority.create(createCoffeeDto);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${createCoffeeDto.name} not found`);
    }
    return coffee;
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.coffeeRespority.update(id, updateCoffeeDto);
    if (!existingCoffee) {
    }
  }

  remove(id: string) {
    const coffee = this.coffeeRespority.remove(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }
}
