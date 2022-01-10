import express from 'express';
import customError, { errorHandler } from '../utils/customError';

const routes = express();
routes.use(express.json());

routes.get('/', (req, res) => res.json({ message: 'success' }));
routes.get('/error', (req, res) => customError('custom error!', 401));

routes.use(errorHandler);

export default routes;
