import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voo } from './voo.entity';                 
import { VoosModule } from './voos/voos.module'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',       
      port: 5432,              
      username: 'postgres', 
      password: 'root',   
      database: 'airportdb',   
      entities: [Voo],         
      synchronize: true,       
    }),
    VoosModule,                
  ],
})
export class AppModule {}

