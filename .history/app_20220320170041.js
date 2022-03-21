import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import packagesRouter from './router/packages.js';
import authRouter from './router/auth.js';
import { config } from './config.js';
import { sequelize } from './db/database.js';

const app = express();

const corsOption = {
  origin: config.cors.allowedOrigin,
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(helmet());
app.use(cors(corsOption));
app.use(morgan('tiny'));

app.use('/packages', packagesRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(config.port, () => {
  console.log(`Server is started... ${new Date()}`);
});

sequelize.sync().then((client) => console.log(client));