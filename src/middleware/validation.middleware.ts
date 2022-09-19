import e, { Request , Response, NextFunction,RequestHandler } from "express";
import Joi from "joi";

function validationMiddleware(schema:Joi.Schema):RequestHandler {

    return async (
        req:Request, 
        res:Response, 
        next:NextFunction
        ):Promise<void> =>{
        const validationOptions ={
            abortEarly: false,
            allowUnknown:true,
            stripUnknown: true,
        };// xem lại các thuộc tính
        try {
            
        } catch (error) {
            
        }
        try {
            const value = await schema.validateAsync(
                req.body,
                validationOptions,
            ); // check lại dữ liệu
            req.body=value;
            next();
        } catch (e:any) {
            const errors:string[]=[];
            
             e.details.forEach((error:Joi.ValidationErrorItem) => {
                errors.push(error.message);
             });
             res.status(400).send({errors:errors});
              
        }
    };

}

export default validationMiddleware;