import { Router, Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import Author from '../entities/Autor';

const autorRoutes = Router();

/* Implemente aqui os métodos que irão atender as requisições HTTP para a entidade Autor. */
// Criar autor
autorRoutes.post("/", async (req: Request, res: Response) => {
    try {
        const { name, birthdate, biography, nationality, active } = req.body;

        if (!name || !birthdate || !biography || !nationality || active === undefined) {
            return res.status(400).json({ error: "Campos obrigatórios ausentes." });
        }

        const authorRepository = AppDataSource.getRepository(Author);

        const author = authorRepository.create({
            name,
            birthdate: new Date(birthdate),
            biography,
            nationality,
            active,
        });

        await authorRepository.save(author);

        return res.status(201).json(author);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao criar autor." });
    }
});

// Buscar todos os autores
autorRoutes.get("/", async (req: Request, res: Response) => {
    try {
        const authorRepository = AppDataSource.getRepository(Author);
        const authors = await authorRepository.find();
        return res.status(200).json(authors);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao buscar autores." });
    }
});

// Buscar autor por ID
autorRoutes.get("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const authorRepository = AppDataSource.getRepository(Author);

        const author = await authorRepository.findOneBy({ id: parseInt(id) });
        if (!author) {
            return res.status(404).json({ error: "Autor não encontrado." });
        }

        return res.status(200).json(author);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao buscar autor." });
    }
});

// Atualizar autor
autorRoutes.put("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, birthdate, biography, nationality, active } = req.body;

        const authorRepository = AppDataSource.getRepository(Author);
        const author = await authorRepository.findOneBy({ id: parseInt(id) });

        if (!author) {
            return res.status(404).json({ error: "Autor não encontrado." });
        }

        authorRepository.merge(author, { name, birthdate, biography, nationality, active });
        await authorRepository.save(author);

        return res.status(200).json(author);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao atualizar autor." });
    }
});

// Deletar autor
autorRoutes.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const authorRepository = AppDataSource.getRepository(Author);

        const author = await authorRepository.findOneBy({ id: parseInt(id) });
        if (!author) {
            return res.status(404).json({ error: "Autor não encontrado." });
        }

        await authorRepository.delete(id);

        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao deletar autor." });
    }
});

export default autorRoutes;