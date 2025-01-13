import "reflect-metadata"
import { DataSource } from "typeorm"

import Livro from "../entities/Livro"
import Auditorio from "../entities/Auditorio"
import Leitor from "../entities/Leitor"
import Autor from "../entities/Autor"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "adimin",
    database: "biblioteca",
    synchronize: true,
    logging: true,
    entities: [Livro, Auditorio, Leitor, Autor],
    migrations: ["src/database/migrations/*.ts"]
})
