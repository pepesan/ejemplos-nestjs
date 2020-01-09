import { Module } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { MongoController } from './mongo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from './schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Animal', schema: Schema }])],
  providers: [MongoService],
  controllers: [MongoController],
})
export class MongoModule {}
