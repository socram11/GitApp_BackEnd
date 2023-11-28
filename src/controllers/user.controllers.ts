import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../handlers/error.handler";
import { ResponseHandler } from "../handlers/response.handler";


const users = null
  
    

export const getUsers = async (
    req: Request,
    _res: Response,
    next: NextFunction
    ) => {

    if(!users)
    next(new ErrorHandler(404, "No se encontraron usuarios"));

        
    const result = users;
    next(new ResponseHandler(200, result, "Usuario Encontrado"));
    }