import {Response,Request,Router, NextFunction}  from "express";
import { AnyZodObject, ZodError, ZodObject } from "zod";
import * as userController from "./user.controlller";
import {User,Users,UserWithId} from "./user.model";

const route = Router();

interface ReqValiditors{
    body?:AnyZodObject
}
const valideReq=(v : ReqValiditors)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        try {
            const user = v.body?.parse(req.body)
            next()

      } catch (error) {

        if(error instanceof ZodError){
            res.status(422)
        }

        next(error)
      }
    }
}

route.get("/data",userController.getAllData);
route.get("/username/:id",userController.getByUsername);
route.post("/add",valideReq({body:User}),userController.addItem);


export default route