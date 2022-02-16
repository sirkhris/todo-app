import { Router } from 'express';
import { getAll } from '../controller/user/getAll';
import { post } from '../controller/user/post';
import { getOne } from '../controller/user/getOne';
import { put } from '../controller/user/put';
import { deleteOne } from '../controller/user/deleteOne';
import { putStatus } from '../controller/user/putStatus';

const user = Router();

user.route('/status/:id').put(putStatus);
//get singular user
user.route('/:id').get(getOne)
.put(put)
.delete(deleteOne);
//all data
user.route('/')
.get(getAll)
.post(post);

export {user};