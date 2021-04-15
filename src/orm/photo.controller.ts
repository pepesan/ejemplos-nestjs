import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './models/photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get() // GET / Listado de objetos
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
  @Post() // POST / Añadir objeto -> Dato Json (Create)
  create(@Body() photo: Photo): Promise<Photo> {
    return this.photoService.save(photo);
  }

  @Get(':id') // GET /:id FindByID (Show/Read)
  findOne(@Param('id') id: number): Promise<Photo> {
    return this.photoService.findById(id);
  }

  @Put(':id') // POST/PUT/PATCH /:id (Update) objeto -> Dato JSON Objeto
  async update(@Param('id') id: number, @Body() photo: Photo): Promise<Photo> {
    await this.photoService.findById(id);
    photo.id = id;
    return this.photoService.save(photo);
  }
  // Otra opción GET /:id/delete
  @Delete(':id') // DELETE /:id (Delete) Remove objeto
  remove(@Param('id') id: number): Promise<Photo> {
    return this.photoService.delete(id);
  }
}
