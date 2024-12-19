import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} 
import from 'typeorm';
  
  @Entity('auditoriums')
  export class Auditorio {
    // ID do auditório (autoincremento)
    @PrimaryGeneratedColumn()
    id: number;
  
    // Nome do auditório (campo obrigatório)
    @Column({ type: 'varchar', length: 255 })
    name: string;
  
    // Capacidade do auditório
    @Column({ type: 'int' })
    capacity: number;
  
    // Localização do auditório
    @Column({ type: 'varchar', length: 255 })
    location: string;
  
    // Se o auditório possui projetor
    @Column({ type: 'boolean' })
    has_projector: boolean;
  
    // Se o auditório possui sistema de som
    @Column({ type: 'boolean' })
    has_sound_system: boolean;
  
    // Data de criação do registro
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    // Data da última atualização do registro
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  }
  