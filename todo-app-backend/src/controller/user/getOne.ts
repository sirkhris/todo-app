import type { Request, Response } from "express";
import { getOneQuery } from "../../sql/user/userSql";

import { db } from "../../util/db";

export async function getOne (req: Request, res: Response) {
  const {id} = req.params;

  try{
    const data = await db
      .query(getOneQuery, [id])
      .then(response => response.rows)
      .catch(err => console.log(err.stack))

  res.status(200).send({data});
  } catch(err){
    console.log(err);
  }
}