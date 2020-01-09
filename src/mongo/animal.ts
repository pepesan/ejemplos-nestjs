import { IsInt, IsString } from 'class-validator';

export class Animal {
  @IsString()
  name: string;
  @IsInt()
  age: number;
}
