import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { CoffeesRepository } from './coffees.repository';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService, CoffeesRepository],
})
export class CoffeesModule {}
