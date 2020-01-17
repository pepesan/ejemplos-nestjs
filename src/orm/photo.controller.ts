import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './models/photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
  @Post()
  create(@Body() photo: Photo): Promise<Photo> {
    return this.photoService.save(photo);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Photo> {
    return this.photoService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() photo: Photo): Promise<Photo> {
    await this.photoService.findById(id);
    photo.id = id;
    return this.photoService.save(photo);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<Photo> {
    return this.photoService.delete(id);
  }
}
