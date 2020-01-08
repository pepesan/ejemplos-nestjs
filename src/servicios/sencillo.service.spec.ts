import { Test, TestingModule } from '@nestjs/testing';
import { ServicioSencilloService } from './sencillo.service';

describe('ServicioSencilloService', () => {
  let service: ServicioSencilloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicioSencilloService],
    }).compile();

    service = module.get<ServicioSencilloService>(ServicioSencilloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
