import { NextFunction, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { ErrorHandler } from "../handlers/error.handler";

export const createUserMiddleware = async (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    await checkSchema ({
        id:{
            in:["body"],
            isNumeric: true,
            errorMessage: "El id es requerido"
        },
        name:{
            in:["body"],
            isString: true,
            errorMessage: "El nombre es requerido"
        },
        full_name:{
            in:["body"],
            isString: true,
            errorMessage: "el nombre completo es requerido"
        },
        html_url:{
            in:["body"],
            isString: true,
            errorMessage: "la url es requerida"
        },
        description:{
            in:["body"],
            isString: true,
            errorMessage: "la descripcion es requerida"
        },
        private:{
            in:["body"],
            isBoolean: true,
            errorMessage: "especificar si es privado o no"
        },
        collaborators_url:{
            in:["body"],
            isNumeric: true,
            errorMessage: "Campo de colaboradores es requerido"
        },
        lanuages_url:{
            in:["body"],
            isNumeric: true,
            errorMessage: "Los lenguajes son requeridos"
        },
        
    }).run(req);

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        next(new ErrorHandler(400, errors.array()));
    }

    next();

    }