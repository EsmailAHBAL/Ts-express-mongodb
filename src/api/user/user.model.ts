import { WithId } from "mongodb";
import { type } from "os";
import * as z from "zod";
import { db } from "../../db/db.db";

export const User = z.object({

   username : z.string().min(3).max(25),
   password :z.string().min(6)
});

export type User = z.infer<typeof  User>
export type UserWithId = WithId<User>;

export const Users = db.collection<User>("Users");
