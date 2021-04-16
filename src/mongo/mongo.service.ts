import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schema';
import { CreateCatDTO } from './cat';

@Injectable()
export class MongoService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDTO): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findById(id: string): Promise<Cat> {
    return this.catModel.findById(id);
  }

  async updateById(id: string, animal: CreateCatDTO): Promise<Cat> {
    const cambios = { name: animal.name, age: animal.age};
    await this.catModel.updateOne({ _id : id }, cambios);
    return this.catModel.findById(id);
  }

  async delete(id: string): Promise<Cat> {
    const animalG = await this.catModel.findById(id);
    await this.catModel.findOneAndRemove({ _id : id });
    return animalG;
  }
}
