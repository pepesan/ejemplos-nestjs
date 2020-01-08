import { Module } from '@nestjs/common';
import { SencilloService } from './sencillo.service';
import { SencilloController } from './sencillo.controller';

@Module({
  providers: [SencilloService],
  controllers: [SencilloController],
})
export class ServiciosModule {}
