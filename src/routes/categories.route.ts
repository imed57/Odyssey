import { getAll,getById,create,updateById,deleteById } from "../controllers/categories.controller";
import express from'express';
import {authenticateJWT} from "../middlewares/authenticateJWT";

const routerCategory = express.Router();

routerCategory.get('/', getAll);

routerCategory.get('/:id', getById);

routerCategory.post('/',authenticateJWT, create);

routerCategory.patch('/:id',authenticateJWT, updateById);

routerCategory.delete('/:id',authenticateJWT, deleteById);

export default routerCategory;
