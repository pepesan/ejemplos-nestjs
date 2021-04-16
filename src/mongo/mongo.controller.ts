import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { Photo } from '../orm/models/photo.entity';
import { CreateCatDTO } from './cat';
import { Cat } from './schema';

@Controller('mongo')
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}
  @Post()
  async create(@Body() animal: CreateCatDTO): Promise<Cat> {
    const animalD = await this.mongoService.create(animal);
    return animalD;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.mongoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cat> {
    return this.mongoService.findById(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() animal: CreateCatDTO): Promise<Cat> {
    return this.mongoService.updateById(id, animal);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Cat> {
    return this.mongoService.delete(id);
  }
}
