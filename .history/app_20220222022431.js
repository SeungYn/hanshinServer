import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import postsRouter from './router/posts.js
'


app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
const app = express();

app.use('/posts', postsRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(8080);
