import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './rutas/rutas.controller';
import { PayloadController } from './payload/payload.controller';
import { ServiciosModule } from './servicios/servicios.module';

@Module({
  imports: [ServiciosModule],
  controllers: [AppController, RutasController, PayloadController],
  providers: [AppService],
})
export class AppModule {}
