require('dotenv').config();
import express, { json} from 'express';
import cors from 'cors';
import { router } from './router/router';

const PORT = process.env.PORT;

const app = express();
app.use(json());
app.use(cors());

app.use(...router);
app.listen(PORT, () => console.log('live @ ' + `http://localhost:${PORT}`));