import type { Request, Response } from 'express';
import { getOneQuery, putStatusQuery } from '../../sql/user/userSql';
import { db } from '../../util/db';

export async function putStatus(req: Request, res: Response) {
  const { id } = req.params;
  const { completed } = req.body;
  
  try {
    const check = await db
      .query(getOneQuery, [id])
      .then((response) => response.rows[0])
      .catch((err) => console.log(err.stack));

    if (check) {
      //start of update

      const data = await db
        .query(putStatusQuery, [id, Boolean(completed)])
        .then((response) => response.rows[0])
        .catch((err) => console.log(err.stack));
      res.status(200).send({
        status: 'User updated.',
        data
      });
    } else res.status(404).send({ status: 'user not found.' });
  } catch (err) {
    console.log(err);
  }
}
