import express from 'express';
import config from './config';
import routes from './routes/routes';

const app = express();

app.use(routes);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${config.port}!`);
});
