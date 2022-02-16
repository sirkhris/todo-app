import type { Request, Response } from "express";
import { getAllQuery } from "../../sql/user/userSql";
import { db } from "../../util/db";

export async function getAll(_req: Request, res: Response) {
  try{
    const data = await db
      .query(getAllQuery)
      .then(response => response.rows)
      .catch(err => console.log(err.stack))

  res.status(200).send({data});
  } catch(err){
    console.log(err);
  }
}


  
