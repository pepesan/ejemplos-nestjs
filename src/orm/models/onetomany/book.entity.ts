import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Author} from './author.entity';

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(type => Author, author => author.books)
  author: Author;

}
