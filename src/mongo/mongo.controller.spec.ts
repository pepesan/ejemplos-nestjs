import { Test, TestingModule } from '@nestjs/testing';
import { MongoController } from './mongo.controller';

describe('Mongo Controller', () => {
  let controller: MongoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MongoController],
    }).compile();

    controller = module.get<MongoController>(MongoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
