import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableAuthors1734511946652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "authors",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name: "birthdate",
                    type: "date",
                    isNullable: false
                },
                {
                    name: "biography",
                    type: "text",
                    isNullable: false
                },
                {
                    name: "nationality",
                    type: "varchar",
                    length: "100",
                    isNullable: false
                },
                {
                    name: "active",
                    type: "boolean",
                    default: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("authors");
    }

}

/* Tarefas

1 - Migration: Crie uma migration que criará a tabela authors no banco de dados com os seguintes campos:

    id (inteiro, chave primária, autoincremento).

    name (string, tipo varchar, not null, nome do autor).

    birthdate (data, tipo date, data de nascimento do autor).

    biography (texto, tipo text, biografia do autor).

    nationality (string, tipo varchar, not null, nacionalidade do autor).

    active (booleano, tipo boolean, indica se o autor está ativo ou não).

    created_at (data e hora, tipo timestamp, data de criação do autor).

    updated_at (data e hora, tipo timestamp, data da última atualização).
    Utilize o comando do TypeORM para gerar a migration e realize as modificações necessárias para que todos os tipos de dados estejam corretamente definidos no PostgreSQL. */
