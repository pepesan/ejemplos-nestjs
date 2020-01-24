import { Test, TestingModule } from '@nestjs/testing';
import { SubormController } from './suborm.controller';

describe('Suborm Controller', () => {
  let controller: SubormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubormController],
    }).compile();

    controller = module.get<SubormController>(SubormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
