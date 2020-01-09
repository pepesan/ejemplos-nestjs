import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './rutas/rutas.controller';
import { PayloadController } from './payload/payload.controller';
import { ServiciosModule } from './servicios/servicios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmModule } from './orm/orm.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [
    ServiciosModule,
    TypeOrmModule.forRoot(),
    OrmModule,
    MongooseModule.forRoot('mongodb://localhost/test'),
    MongoModule,
  ],
  controllers: [AppController, RutasController, PayloadController],
  providers: [AppService],
})
export class AppModule {}
