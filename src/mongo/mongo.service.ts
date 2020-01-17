import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './animal';

@Injectable()
export class MongoService {
  constructor(@InjectModel('Animal') private readonly modelo: Model<Animal>) {}

  async create(animal: Animal): Promise<Animal> {
    const createdAnimal = new this.modelo(animal);
    return await createdAnimal.save();
  }

  async findAll(): Promise<Animal[]> {
    return await this.modelo.find().exec();
  }
}
