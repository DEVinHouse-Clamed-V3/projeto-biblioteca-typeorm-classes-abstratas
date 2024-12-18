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
