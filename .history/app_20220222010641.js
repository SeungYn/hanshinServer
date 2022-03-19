import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
const app = express();

app.get('/', (req, res, next) => {
  console.log(req.path);
  console.log(req.headers);
  console.log(req.params);
  console.log(req.query);
  res.json({ name: 'asd' });
});
app.listen(8080);
