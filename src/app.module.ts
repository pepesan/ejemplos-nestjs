import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './rutas/rutas.controller';
import { PayloadController } from './payload/payload.controller';
import { ServiciosModule } from './servicios/servicios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmModule } from './orm/orm.module';

@Module({
  imports: [
    ServiciosModule,
    TypeOrmModule.forRoot(),
    OrmModule,
  ],
  controllers: [AppController, RutasController, PayloadController],
  providers: [AppService],
})
export class AppModule {}
