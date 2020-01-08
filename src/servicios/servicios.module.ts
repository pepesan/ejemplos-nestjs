import { Module } from '@nestjs/common';
import { ServicioSencilloService } from './servicio-sencillo/servicio-sencillo.service';
import { ControladorSencilloController } from './controlador-sencillo/controlador-sencillo.controller';

@Module({
  providers: [ServicioSencilloService],
  controllers: [ControladorSencilloController]
})
export class ServiciosModule {}
