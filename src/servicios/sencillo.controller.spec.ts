import { Test, TestingModule } from '@nestjs/testing';
import { SencilloController } from './sencillo.controller';

describe('SencilloController', () => {
  let controller: SencilloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SencilloController],
    }).compile();

    controller = module.get<SencilloController>(SencilloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
