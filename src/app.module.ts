import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voo } from './voo.entity';                 
import { VoosModule } from './voos/voos.module'; // Módulo onde estarão os endpoints

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',       // Host do PostgreSQL
      port: 5432,              // Porta padrão
      username: 'postgres', // Usuário do PostgreSQL
      password: 'root',   // Senha do usuário
      database: 'airportdb',   // Nome do banco de dados
      entities: [Voo],         // A entidade que será utilizada
      synchronize: true,       // Sincroniza a estrutura do banco de dados automaticamente (use com cuidado em produção)
    }),
    VoosModule,                // Módulo de voos
  ],
})
export class AppModule {}

