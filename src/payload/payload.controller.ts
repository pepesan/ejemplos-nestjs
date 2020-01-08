import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateObjectDto } from './create-object-dto.interface';
import { ListAllEntities } from './list-all-entities';
import { UpdateObjectDto } from './update-object-dto.interface';

@Controller('payload')
export class PayloadController {
  @Post()
  async create(@Body() createDto: CreateObjectDto) {
    // this.objects.push(createDto);
    return `This action adds a new object with name: ${createDto.name}`;
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all objects (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This action returns a #${id} object`;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateObjectDto: UpdateObjectDto) {
    return `This action updates a #${id} object and name: ${updateObjectDto.name}`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return `This action removes a #${id} object`;
  }

}
