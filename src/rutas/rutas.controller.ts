import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect } from '@nestjs/common';

@Controller('rutas')
export class RutasController {
  @Get()
  getSimple(): string {
    return 'get /rutas';
  }
  @Post()
  postSimple(): string {
    return 'post /rutas';
  }
  // Ruta patrón
  @Get('ab*cd')
  findAll() {
    return 'get /rutas/abcd';
  }
  // Ruta con parámetro
  @Get('param/:id')
  findById(@Param() params) {
    return 'post /rutas/:id ' + params.id;
  }
  // Ruta con parámetro nombrado
  @Post('param/:id')
  ModifyById(@Param('id') id: number) {
    return 'post /rutas/:id ' + id;
  }
  // Código de respuesta
  @Get('codigo')
  @HttpCode(204)
  getCodigo() {
    return 'Devuelve el código HTTP 204';
  }
  // Redirección
  @Get('redir')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
  // Asincronía
  @Get('async')
  async getAsync(): Promise<any[]> {
    return [];
  }
}
