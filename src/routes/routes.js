import express from 'express';
import customError, { BAD_REQUEST } from '../utils/customError';
import { errorHandler } from '../middlewares/errorHandler';

const routes = express();
routes.use(express.json());

routes.get('/', (req, res) => res.json({ message: 'success' }));
routes.get('/error', () => customError(BAD_REQUEST));

routes.use(errorHandler);

export default routes;
