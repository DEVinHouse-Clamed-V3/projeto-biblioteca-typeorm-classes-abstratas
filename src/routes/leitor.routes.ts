import { response, Router } from 'express';
import { AppDataSource
} from '../database/data-source';
import { request } from 'http';
import Leitor from "../entities/Leitor"
const leitorRoutes = Router();

/* Implemente aqui os métodos que irão atender as requisições HTTP para a entidade Leitor. */
 //criar um leitor: Permitir ao usuario adicionar um novo leitor na biblioteca 
leitorRoutes.post("/",async (request, response)=>{
try{
    const{name, email, phone_number, birthdate, address,active} = request.body;
    if (!name || !email || !phone_number || !birthdate || !address || !active || undefined){
        return response.status(400).json({message:"Dados inválidos"});
    }

        const leitor = new Leitor();
    leitor.name = name; 
    leitor.email = email;
    leitor. phone_number = phone_number;
    leitor.birthdate= birthdate;
    leitor.address = address;
    leitor.active = active 

    await AppDataSource.getRepository(Leitor).save(leitor);
    return response.status(201).json(leitor);

}
catch (error){
    console.log(error);
    return response.status(500).json({mensage:"Erro ao criar leitor"})
}
})

//Burcar todos os leitores: Retornar uma lista de leitores cadastados

leitorRoutes.get("/", async(request, response)=>{
    try{
const leitores = await AppDataSource.getRepository(Leitor).find();
response.status(200).json(leitores)
    }
    catch (error){
console.log(error);
return response.status(500).json({menssage:"Erro ao buscar leitores"})
    }
    
    const leitores = await AppDataSource.getRepository(Leitor).find();

})


leitorRoutes.get(":id", async(request, response)=>{
    try{
const {id} = request.params;
const leitorId = parseInt(id);
const leitor = await AppDataSource.getRepository(Leitor).findOne({where:{id:leitorId}})

if (!leitor){
    return response.status(404).json({message:"Leitornão encontrado"});

}

return response.status(200).json(leitor);
    }
    catch(error){
console.log(error);
return response.status(500).json({message:"Error ao buscar leitor"});
    }
})

//Atualizar as informações de um leitor: Permitir ao usuário atualizar o nome, email, telefone, endereço e se o leitor está ativo.

leitorRoutes.put("/:id", async(request, response)=>{
    try{
        const {id} = request.params;
        const{name, email, phone_number, address, active} = request.body;
        const leitorId = parseInt(id);
        const leitor = await AppDataSource.getRepository(Leitor).findOne({
            where: {id:leitorId}
        });
        if (!leitor){
            return response.status(404).json({
                mensage: "Leitor não encontrado"
            });
        }
        leitor.name = name;
        leitor.email = email;
        leitor.phone_number = phone_number;
        leitor.address = address;
        leitor.active = active;

        await AppDataSource.getRepository(Leitor).save(leitor);
        return response.status(200).json(leitor);
        
    }
    catch (error){
            console.log(error);
            return response.status (500).json({
                message:"Erro ao atualizar leitor"
            });
        }
    }
)


//Deletar  leitor: Permitir ao usuário remover um leitor da biblioteca.

leitorRoutes.delete("/:id", async (request, response)=>{
    try{
        const {id} = request.params;

        const leitorId = parseInt(id);
        const leitor = await AppDataSource.getRepository(Leitor).findOne({
            where: {id:leitorId}
        });
        if (!leitor){
            return response .status(404).json({
                message: "Leitor não encontrado"
            });
        }

        await AppDataSource.getRepository(Leitor).delete(leitorId);
        return response.status(204).json({
            message:"Leitor deletado com sucesso."
        })

}
catch (error){
    console.log(error);
    return response.status(500).json({message:"Error ao deletar leitor"});
}
})


export default leitorRoutes;