import { Injectable } from '@nestjs/common';
import { Dato } from './dato';

@Injectable()
export class SencilloService {
  public datos: Dato [] = [];
  getDatos(): Dato[] {
    return this.datos;
  }
}
