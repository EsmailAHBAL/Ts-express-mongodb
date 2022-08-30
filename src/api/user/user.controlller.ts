import {
   NextFunction,
   Request,
   Response
} from "express"
import {
   type
} from "os"
import {
   json
} from "stream/consumers"
import {
   ZodError
} from "zod"
import {
   notFound
} from "../../middlewares"
import {
   User,
   Users,
   UserWithId
} from "./user.model"


export const getAllData = async (req: Request, res: Response < [UserWithId] > ) => {

   Users.find().toArray().then(data => {
      res.json(
         data as[UserWithId]
      )
   })

}

export const getByUsername = async (req: Request, res: Response < UserWithId > , next: NextFunction) => {

   const username = req.params.id;
   Users.findOne({
      username: username
   }).then(data => {
      if (!data) {

         res.status(404);
         throw new Error(`User with Username "${username}" not found.`);
      }
      res.json(data as UserWithId)
   }).catch(err => {
      next(err)
   });

}

export const addItem = async (req: Request, res: Response < User | {message:string}> , next: NextFunction) => {

    try {
      const user = req.body;
    const ifE =  await Users.findOne({username:user.username})

if(!ifE) { 
   Users.insertOne(user).
   then(data=>{
     res.json({
      message:"Data Inserted "
     })
   })
} 

else{
   res.json({
      message:"Data Not Inserted "
     })
}
    } catch (error) {
        next(error)
    }
}