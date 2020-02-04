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

  async findById(id: string): Promise<Animal> {
    return await this.modelo.findById(id);
  }

  async updateById(id: string, animal: Animal): Promise<Animal> {
    const cambios = { name: animal.name, age: animal.age};
    await this.modelo.updateOne({ _id : id }, cambios);
    return await this.modelo.findById(id);
  }

  async delete(id: string): Promise<Animal> {
    const animalG = await this.modelo.findById(id);
    await this.modelo.findOneAndRemove({ _id : id });
    return animalG;
  }
}
