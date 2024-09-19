import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('voos')
export class Voo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  codigo_voo: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  origem_cidade: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  destino_cidade: string;

  @Column({ type: 'date', nullable: false })
  data: string; 
}

