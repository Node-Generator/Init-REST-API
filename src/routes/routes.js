import express from 'express';

const routes = express();

routes.use(express.json());
routes.get('/', (req, res) => res.json({ message: 'success' }));

export default routes;
