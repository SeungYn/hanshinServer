import express from 'express';
import { process_params } from 'express/lib/router';

const app = express();

app.get('/', (req, res, next) => {
  console.log('get');
});
app.listen(8080);
