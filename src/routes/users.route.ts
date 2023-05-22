import { getAll,getById,create,updateById,deleteById,register,login } from "../controllers/users.controller";
import express from'express';
import {authenticateJWT} from "../middlewares/authenticateJWT";

const routerUser = express.Router();

routerUser.get('/', getAll);  // get all users

routerUser.get('/:id', getById);  // get a user by id

routerUser.post('/',authenticateJWT, create);  // create a user with authentication

routerUser.patch('/:id',authenticateJWT, updateById);  // update a user with authentication

routerUser.delete('/:id',authenticateJWT, deleteById);  // delete a user with authentication

routerUser.post('/auth', login, authenticateJWT);  // auth a user

routerUser.post('/register',authenticateJWT, register);  // register a user with authentication

// we made all the routes for the user to use the functions from the controller in postman

export default routerUser