import { getAll,getById,create,updateById,deleteById } from "../controllers/orders.controller";
import express from'express';
import {authenticateJWT} from "../middlewares/authenticateJWT";

const routerOrder = express.Router();

routerOrder.get('/', getAll);

routerOrder.get('/:id', getById);

routerOrder.post('/',authenticateJWT, create);

routerOrder.patch('/:id',authenticateJWT, updateById);

routerOrder.delete('/:id',authenticateJWT, deleteById);

export default routerOrder;