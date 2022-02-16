import type { Request, Response } from "express";
import { getOneQuery, putQuery } from "../../sql/user/userSql";
import { db } from "../../util/db";

export async function put(req: Request, res: Response) {
  const {id} = req.params;
  const {name} = req.body; 

  try{
    const check = await db
      .query(getOneQuery,[id])
      .then(response => response.rows[0])
      .catch(err => console.log(err.stack))

      if(check){
        //start of update
        const result = {
          name: name ? name : check.name,
        }

      await db
      .query(putQuery, [id, result.name])
      .then(response => response.rows[0])
      .catch(err => console.log(err.stack))
      res.status(200).send({
        status: 'User updated.',
      })
      } 
      else res.status(404).send({status: 'user not found.'})

  } catch(err){
    console.log(err);
  }
}