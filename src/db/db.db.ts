import { Db, DBRef, MongoClient } from "mongodb";
const url =`mongodb://admin:pass@localhost:27017/`
const client  = new MongoClient(url);

export const db = client.db("db");



