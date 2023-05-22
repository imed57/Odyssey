import { Request, Response } from "express";
import User from "../database/models/Users";
import {createUser, deleteUser, updateUser} from "../services/Users.service";

const jwt = require('jsonwebtoken');


// findall function to get all users
export async function getAll(req: Request, res: Response) {
  try {
    const Users = await User.findAll(); // get all users
    res.status(200).send(JSON.stringify(Users)) // send all users
  } catch (err:any) {
    res.status(400).json({ message: err.message }) // send error message
  }
}

// Findwithid function to get a user by id
export async function getById(req: Request, res: Response) {
  try {
    const id = req.params; // get id from params
    const Users = await User.findAll({where: id}); // get user by id
    res.json(Users); // send user
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}

// Create function to create a user
export async function create(req: Request, res: Response) {
  try {
    const newser = await createUser(req.body); // use the createuser function from the service to create a user
    res.json(newser);
  } catch (err) {
    res.status(409).send({ message: 'a problem occurs when you wanted to create a new User' })
  }
}


// Update function to update a user
export async function updateById(req: Request, res: Response) {
  try {
    const updatedUser = await updateUser(req.body, req.params); // use the updateuser function from the service to update a user
    res.status(200).json(updatedUser)
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}

// Delete function to delete a user
export async function deleteById(req: Request, res: Response) {
  try {
    res.json(deleteUser(req.params)); // use the deleteuser function from the service to delete a user
  } catch (err:any) {
    res.status(400).send({ message: err.message })
  }
}

// Register function to register a user
export async function register(req: Request, res: Response) {
  try {
    const newUser = await createUser(req.body); // use the createuser function from the service to create a user
    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).send({ message: 'a problem occurs when you wanted to create a new User' })
  }
}


// Auth function to auth a user
export async function login(req: Request, res: Response) {
  const user = { 
    surname: req.body.surname,  // get surname from body
    password: req.body.password,  // get password from body
  }
  req = await User.findOne({  // find user by surname and password
    where: {surname: req.body.surname, password: req.body.password,},
  });

  const accessToken = jwt.sign ({surname: user.surname, password: user.password}, process.env.SECRET, { expiresIn: '1 day' }); // create a token with the user's surname and password
  res.send({ accessToken: accessToken }); // send the token
}

