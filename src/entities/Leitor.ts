import { Entity, PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("leitores")
class Leitor {
    @PrimaryGeneratedColumn("increment")
id: number;

@Column("varchar",{length:255, nullable:false})
name:string

@Column("varchar",{length:255,nullable:false})
email:string;

@Column("varchar",{length:20,nullable:false})
phone_number:string;

@Column("date",{nullable:false})
birthdate:Date;

@Column("text",{nullable:false})
address:string


@Column("boolean",{default:true})
active:boolean

@CreateDateColumn()
create_at: Date;

@UpdateDateColumn()
updated_at:Date;

}

export default Leitor;