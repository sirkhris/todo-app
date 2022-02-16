import type { Request, Response } from "express";
import { postQuery } from "../../sql/user/userSql";
import { db } from "../../util/db";

export async function post (req: Request, res: Response) {
    const {name, completed} = req.body;
    try{
      const data = await db
        .query(postQuery, [name, completed])
        .then(response => response.rows[0])
        .catch(err => console.log(err.stack))
  
    res.status(200).send({data});
    } catch(err){
      console.log(err);
    }
  }