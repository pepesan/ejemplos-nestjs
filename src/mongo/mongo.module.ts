import { Module } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { MongoController } from './mongo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [MongoService],
  controllers: [MongoController],
})
export class MongoModule {}
