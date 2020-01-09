import { Body, Controller, Get, Post } from '@nestjs/common';
import { Animal } from './animal';
import { MongoService } from './mongo.service';

@Controller('mongo')
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}
  @Post()
  async create(@Body() animal: Animal): Promise<Animal> {
    await this.mongoService.create(animal);
    return animal;
  }

  @Get()
  async findAll(): Promise<Animal[]> {
    return this.mongoService.findAll();
  }
}
