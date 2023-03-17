import { Request, Response } from "express"
import prisma from "../prisma/prisma";

export const getBooks = async (req:Request, res: Response) => {
  try {
    const result = await prisma.book.findFirst(
      {include: 
        {author: 
          {select: {name: true}
        }
      } }
      )
    res.status(200).send({
      status: "success",
      message: result
    })
  } catch (error) {
    console.log(error);
  }
}

export const addBook =async (req: Request, res: Response) => {
  const data = req.body;
  
  try {
    const result = await prisma.book.create({
      data: {
        category: data.category,
        image: data.image,
        penerbit: data.penerbit,
        thn_terbit: new Date(),
        title: data.title,
        updatedAt: new Date(),
        author: {
          connect: {id: data.author}
        },
        createdAt: new Date()
      }
    });

    res.status(201).send({
      status: 'success',
      message: 'add data'
    })
  } catch (error) {
    console.log(error);
    
  }
}

export const updateBook =async (req:Request, res: Response) => {
  const dataUpdate = req.body;
  const {id} = req.params;
  try {
    const result = await prisma.book.update({
      where: {id: Number (id)},
      data: {
        title: dataUpdate.title,
        authorId: dataUpdate.authorId
      }
    })
    res.status(200).send({
      status: 'success',
      message: result
    })
  } catch (error) {
    console.log(error);
    
  }
}

export const deleteBook =async (req:Request, res: Response) => {
  const {id} = req.params;

  try {
    const result = await prisma.book.delete({
      where: {id: Number (id)}
    })
    res.status(200).send({
      status: "success",
      message: `delete data from id : ${id}`
    })
  } catch (error) {
    res.status(400).send({
      status: "false",
      message: "server error"
    })
  }
}