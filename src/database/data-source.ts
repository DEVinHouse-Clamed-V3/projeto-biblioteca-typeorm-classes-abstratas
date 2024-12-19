import "reflect-metadata"
import { DataSource } from "typeorm"

import Livro from "../entities/Livro"
import Auditorio from "../entities/Auditorio"
import Leitor from "../entities/Leitor"
import Autor from "../entities/Autor"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 3333,
    username: "postgres",
    password: "admin",
    database: "biblioteca",
    synchronize: true,
    logging: true,
    entities: [Livro, Auditorio, Leitor, Autor],
    migrations: ["src/database/migrations/*.ts"]
})
