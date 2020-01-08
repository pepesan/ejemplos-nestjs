import { IsInt, IsString } from 'class-validator';
// Uso de la biblioteca https://github.com/typestack/class-validator
export class CreateObjectDto {
  @IsString()
  readonly name: string;
  @IsInt()
  readonly age: number;
}
