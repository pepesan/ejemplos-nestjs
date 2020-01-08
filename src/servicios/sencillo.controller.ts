import { Body, Controller, Get, Post } from '@nestjs/common';
import { Dato } from './dato';
import { SencilloService } from './sencillo.service';

@Controller('sencillo')
export class SencilloController {
  private datos: Dato[] = [];
  constructor(private readonly sencilloService: SencilloService) {
    this.datos = this.sencilloService.getDatos();
  }
  @Get()
  getDatos(): Dato[] {
    return this.sencilloService.getDatos();
  }
  @Post()
  async create(@Body() dato: Dato) {
    this.datos.push(dato);
    return `This action adds a new object with name: ${dato.nombre}`;
  }
}
