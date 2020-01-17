import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './models/photo.entity';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { Profile } from './models/onetoone/profile.entity';
import { User } from './models/onetoone/user.entity';
import { Author } from './models/onetomany/author.entity';
import { Book } from './models/onetomany/book.entity';
import { Category } from './models/manytomany/category.entity';
import { Question } from './models/manytomany/question.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Photo,
      Profile,
      User,
      Author,
      Book,
      Category,
      Question])],
  exports: [TypeOrmModule],
  providers: [PhotoService],
  controllers: [PhotoController],
})
export class OrmModule {}
