import { getAll,getById,create,updateById,deleteById } from "../controllers/products.controller";
import express from'express';
import {authenticateJWT} from "../middlewares/authenticateJWT";

const routerProduct = express.Router();

routerProduct.get('/', getAll)

routerProduct.get('/:id', getById);

routerProduct.post('/',authenticateJWT, create);

routerProduct.patch('/:id',authenticateJWT, updateById);

routerProduct.delete('/:id',authenticateJWT, deleteById);

export default routerProduct;
