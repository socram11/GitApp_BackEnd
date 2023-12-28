import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../handlers/error.handler";
import { ResponseHandler } from "../handlers/response.handler";
import { IRepo } from "../models/repo.interface";
import { createRepoService, getReposService, updateRepoService, deleteRepoService } from "../services/repo.service";



export const getRepos = async (
    req: Request,
    _res: Response,
    next: NextFunction
    ) => {

    const query = req.query;    
    const repos = await getReposService(query);
    if(repos instanceof ErrorHandler){
        next(repos);
    }


    if(!repos)
    next(new ErrorHandler(404, "No se encontraron repositorios"));

        
    const result = {repos};
    next(new ResponseHandler(200, result, "Repositorio Encontrado"));
    }

    export const createRepo = async (
        req: Request,
        _res: Response,
        next: NextFunction
        ) => {
          
        const repo: IRepo = req.body;  
        const newRepo = await createRepoService(repo);
        if(newRepo instanceof ErrorHandler){
            next(newRepo);
        }
        next(new ResponseHandler(201, newRepo, "Repositorio creado"));

    };
        
    export const updateRepo = async(
        req: Request,
        _res: Response,
        next: NextFunction
        ) => {
            const id:string = req.params.id
            const repo:Partial<IRepo> = req.body

            const updatedRepo = await updateRepoService(id, repo)
            if(!updatedRepo){
                next(new ErrorHandler(404, "No se encontraron repositorios"));
            }

            if(updatedRepo instanceof ErrorHandler)
                next(updateRepo)


            next(new ResponseHandler(200, updatedRepo, "repositorio actualizado correctamente"))
        }
        
        
    export const deleteRepo = async (
        req: Request,
        _res: Response,
        next: NextFunction
        ) => {
            const id: string = req.params.id
            const repo = await deleteRepoService(id)
            if(!repo){
                next(new ErrorHandler(404, "No se encontraron repositorios"));
            }

            if(repo instanceof ErrorHandler)
                next(repo)


            next(new ResponseHandler(200, repo, "repositorio eliminado correctamente"))
        }
   