import { Module } from '@nestjs/common';
import { VoosController } from './voos.controller';
import { VoosService } from './voos.service';
import { Voo } from '../voo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Voo])],
  controllers: [VoosController],
  providers: [VoosService]
})
export class VoosModule {}
