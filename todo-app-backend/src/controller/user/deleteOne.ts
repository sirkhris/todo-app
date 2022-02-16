import type { Request, Response } from "express";
import { deleteOneQuery, getOneQuery} from "../../sql/user/userSql";
import { db } from "../../util/db";

export async function deleteOne (req: Request, res: Response) {
  const { id } = req.params;
  try{
    const data = await db
      .query(getOneQuery,[id])
      .then(response => response.rows[0])
      .catch(err => console.log(err.stack))

  if (data){
    await db
      .query(deleteOneQuery,[id])
      .catch(err => console.log(err.stack))

    res.status(200).send({status: "user deleted."});
  } 
  else res.status(404).send({status: "user not found."});
  
  } catch(err){
    console.log(err);
  }
}