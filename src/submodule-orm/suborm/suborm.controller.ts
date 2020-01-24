import { Controller, Get } from '@nestjs/common';
import { Photo } from '../../orm/models/photo.entity';
import { PhotoService } from '../../orm/photo.service';
/*
Ejemplo de módulo que usa recursos del modulo ORM
 */
@Controller('suborm')
export class SubormController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
}
