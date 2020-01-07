import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './rutas/rutas.controller';
import { PayloadController } from './payload/payload.controller';

@Module({
  imports: [],
  controllers: [AppController, RutasController, PayloadController],
  providers: [AppService],
})
export class AppModule {}
