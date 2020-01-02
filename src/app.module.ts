import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './rutas/rutas.controller';

@Module({
  imports: [],
  controllers: [AppController, RutasController],
  providers: [AppService],
})
export class AppModule {}
