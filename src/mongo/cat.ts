import { IsInt, IsString } from 'class-validator';

export class CreateCatDTO {
  @IsString()
  name: string;
  @IsInt()
  age: number;
}
