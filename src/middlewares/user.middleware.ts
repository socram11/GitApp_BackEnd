import { NextFunction, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { ErrorHandler } from "../handlers/error.handler";


export const createUserMiddleware = async (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    await checkSchema ({
        login:{
            in:["body"],
            isString: true,
            errorMessage: "El login es requerido"
        },
        name:{
            in:["body"],
            isString: true,
            errorMessage: "El nombre es requerido"
        },
        avatar_url:{
            in:["body"],
            isString: true,
            errorMessage: "no contiene avatar"
        },
        html_url:{
            in:["body"],
            isString: true,
            errorMessage: "la url es requerida"
        },
        company:{
            in:["body"],
            isString: true,
            errorMessage: "no contiene compania"
        },
        location:{
            in:["body"],
            isString: true,
            errorMessage: "no contiene locacíon"
        },
        public_repos:{
            in:["body"],
            isNumeric: true,
            errorMessage: "N de repos es requerido"
        },
        public_gists:{
            in:["body"],
            isNumeric: true,
            errorMessage: "N de gists es requerido"
        },
        followers:{
            in:["body"],
            isNumeric: true,
            errorMessage: "N de seguidores es requerido"
        },
        following:{
            in:["body"],
            isNumeric: true,
            errorMessage: "N de seguidos es requerido"
        },
        created_at:{
            in:["body"],
            isString: true,
            errorMessage: "fecha de creación es requerida"
        },
        bio:{
            in:["body"],
            isString: true,
            errorMessage: "no contiene bio"
        },
        blog:{
            in:["body"],
            isString: true,
            errorMessage: "no contiene blog"
        }
       
    }).run(req);

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        next(new ErrorHandler(400, errors.array()));
    }

    next();

    }