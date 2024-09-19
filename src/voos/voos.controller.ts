import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { VoosService } from './voos.service';
import { Voo } from '../voo.entity';

@Controller('voo')
export class VoosController {
  constructor(private readonly voosService: VoosService) {}

  
  @Post('/create')
  async create(@Body() voo: Voo): Promise<Voo> {
    if (!voo.codigo_voo || !voo.origem_cidade || !voo.destino_cidade || !voo.data) {
      throw new Error('Dados insuficientes para criar um voo');
    }
    return await this.voosService.create(voo);
  }

  
  @Get('/view')
  async findAll(): Promise<Voo[]> {
    return await this.voosService.findAll();
  }

  
  @Put('/update/:id')
  async update(@Param('id') id: number, @Body() voo: Voo): Promise<Voo> {
    return await this.voosService.update(id, voo);
  }

  
  @Delete('/delete/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.voosService.delete(id);
  }
}

