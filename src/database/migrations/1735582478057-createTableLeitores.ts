import { MigrationInterface, QueryRunner, Table } from "typeorm";
import leitorRoutes from "../../routes/leitor.routes";

export class CreateTableLeitores1735582478057 implements MigrationInterface {
public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
    new Table({
        name: "leitores",
        columns: [
        {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
},
        {
            name:"name",
            type:"varchar",
            isNullable:false
        },
{
            name:"email",
            type:"varchar",
            isNullable:false
        },
        {
            name:"phone_number",
            type:"varchar",
            isNullable:false
        },{
        name:"birthate",
        type:"date",
        isNullable:false
        },
        {
            name:"address",
            type:"text",
            isNullable:false
        },
        {
            name:"active",
            type:"boolean",
            default:true
        },
        {
            name:"created_at",
            type:"timestamp",
            default:"now()"
        },
        {
            name:"updated_at",
            type:"timestamp",
            default:"now()"
        }

        ],
    })
    );
  } // subir pro banco

public async down(queryRunner: QueryRunner): Promise<void> {await queryRunner.dropTable("leitores");
}
} // reverter

