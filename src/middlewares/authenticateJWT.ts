const jwt = require('jsonwebtoken');
import { Request, Response } from "express";
import * as dotenv from 'dotenv';

dotenv.config();


export function authenticateJWT(req: Request, res: Response, next: Function) {  // create a function to authenticate a user
    const authHeader = req.headers.authorization;  // get the authorization header from postman
    const token = authHeader && authHeader.split(' ')[1];   // get the token from the header, split the header and get the second part of the header
    if (token == null)
    return res.sendStatus(401);
    jwt.verify(token, process.env.SECRET, (err: any) => {  // verify the token
        if (err)
        return res.sendStatus(403);
        next();  // if the token is valid, go to the next function
    });
}
