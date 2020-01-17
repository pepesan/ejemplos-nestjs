import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './models/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  save(photo: Photo): Promise<Photo> {
    return this.photoRepository.save(photo);
  }
  findById(id: number): Promise<Photo> {
    return this.photoRepository.findOne(id);
  }
  async delete(id: number): Promise<Photo> {
    const promesaObjeto = await this.photoRepository.findOne(id);
    return this.photoRepository.remove(promesaObjeto);
  }
}
