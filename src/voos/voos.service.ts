import { Body, HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Voo } from '../voo.entity';

@Injectable()
export class VoosService {
  voosService: any;
  constructor(
    @InjectRepository(Voo)
    private readonly vooRepository: Repository<Voo>,
  ) {}
  @Post('/create')
  async create(@Body() voo: Voo): Promise<Voo> {
    try {
      if (!voo.codigo_voo || !voo.origem_cidade || !voo.destino_cidade || !voo.data) {
        throw new Error('Dados insuficientes para criar um voo');
      }
      return await this.voosService.create(voo);
    } catch (error) {
      console.error('Erro ao criar voo:', error);
      throw new HttpException('Erro interno do servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<Voo[]> {
    return await this.vooRepository.find();
  }

  async update(id: number, voo: Voo): Promise<Voo> {
    await this.vooRepository.update(id, voo);
    return this.vooRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.vooRepository.delete(id);
  }
}





