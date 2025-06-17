import { Module } from '@nestjs/common';
import { FlavorsController } from './flavors.controller';
import { FlavorsService } from './flavors.service';
import { FlavorsRepository } from './flavors.repository';

@Module({
  controllers: [FlavorsController],
  providers: [FlavorsService, FlavorsRepository],
})
export class FlavorsModule {}
