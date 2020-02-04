import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Animal } from './animal';
import { MongoService } from './mongo.service';
import { Photo } from '../orm/models/photo.entity';

@Controller('mongo')
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}
  @Post()
  async create(@Body() animal: Animal): Promise<Animal> {
    const animalD = await this.mongoService.create(animal);
    return animalD;
  }

  @Get()
  async findAll(): Promise<Animal[]> {
    return this.mongoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Animal> {
    return this.mongoService.findById(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() animal: Animal): Promise<Animal> {
    return this.mongoService.updateById(id, animal);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Animal> {
    return this.mongoService.delete(id);
  }
}
