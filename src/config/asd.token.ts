import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()
const autentication: any = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization
  const keyToken = process.env.SECRET_KEY_TOKEN

  if (!token) {
    res.status(401).send({
      status: "false",
      message: "invalid token"
    })
  } else {
    Jwt.verify(token.split(' ')[1], keyToken!, (err: any, value: any) => {
      if (err) {
        res.status(401).send({
          status: "false",
          message: "invalid token"
        })
      } else {
        (<any>req).user = value.data
        next()
      }
    })
  }
}

export default autentication;