import { Test, TestingModule } from '@nestjs/testing';
import { FlavorsController } from './flavors.controller';

describe('FlavorsController', () => {
  let controller: FlavorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlavorsController],
    }).compile();

    controller = module.get<FlavorsController>(FlavorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
