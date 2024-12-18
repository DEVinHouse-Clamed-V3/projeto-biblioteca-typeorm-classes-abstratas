import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('authors')
class Autor {
   @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('varchar',{ length: 255, nullable: false })
    name: string;

    @Column('date',{ nullable: false })
    birthdate: Date;

    @Column('text',{ nullable: false })
    biography: string;

    @Column('varchar',{ length: 100, nullable: false })
    nationality: string;

    @Column('boolean',{ default: true })  
    active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Autor;