import { Request, Response } from "express"
import prisma from "../prisma/prisma"
import * as Joi from "joi"
import bcript from 'bcrypt'
import { getErrorMessage } from "../utils/Error.util"
import Jwt from "jsonwebtoken"

export const Register = async (req: Request, res: Response) => {
  const dataa = req.body
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    no_identity: Joi.string().required(),
    photo: Joi.string().required()
  })

  const {error} = schema.validate(dataa)

  if (error) {
    res.status(400).send({
      message: "failed",
      status: error.details[0].message,
    })
  }
  
  const salt = await bcript.genSalt(10)
  const hashedPassword = await bcript.hash(dataa.password, salt)
  
  try {
    
    const result = await prisma.user.create({
      data: {
        name: dataa.name,
        email: dataa.email,
        no_identity: dataa.no_identity,
        password: hashedPassword,
        photo: dataa.photo,
      }
    })

    res.status(201).send({
      status: "success"
    })
  } catch (error) {
    res.status(500).send(getErrorMessage(error))
  }
}

export const userLogin = async (req:Request, res: Response) => {
  const data = req.body
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
  })

  const {error} = schema.validate(data)

  if (error) {
    res.status(400).send({
      message: "failed",
      status: error.details[0].message,
    })
  }
  
  try {
    const userLogin = await prisma.user.findFirst({
      where: {
        email: data.email,
        //password: data.password
      }
    });
  
    const checkPassword = await bcript.compare(req.body.password, userLogin!.password)
  
    if (!checkPassword) {
      res.status(400).send({
        message: "failed",
        status: "error bcript password",
      })
    }

    const payload = {
      id: userLogin?.id
    }

    const token = Jwt.sign(payload, process.env.SECRET_KEY_TOKEN!)
    
    res.status(200).send({
      status: "success...",
      data: {
        name: userLogin?.name,
        email: userLogin?.email,
        token: token
      }
    })
  } catch (err) {
    console.log(err);
    
  }
}
