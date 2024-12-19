import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AuditoriumsTable1734558482652 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "auditoriums",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "capacity",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "location",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "has_projector",
                        type: "boolean",
                        isNullable: false,
                    },
                    {
                        name: "has_sound_system",
                        type: "boolean",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("auditoriums");
    }
}
