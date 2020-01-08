import { Test, TestingModule } from '@nestjs/testing';
import { ControladorSencilloController } from './controlador-sencillo.controller';

describe('ControladorSencillo Controller', () => {
  let controller: ControladorSencilloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControladorSencilloController],
    }).compile();

    controller = module.get<ControladorSencilloController>(ControladorSencilloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
