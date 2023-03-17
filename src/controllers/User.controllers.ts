import { Response, Request } from "express";
import prisma from "../prisma/prisma";
import { CreateBookInterface } from "../interface/CreateBook.interface";

export const getUser = async (req:Request, res: Response) => {
  try {
    const user = await prisma.user.findMany();
    res.send(user)
  } catch (err) {
    console.log(err);
    
  }
}

export const addUser = async (req:Request, res: Response) => {
  const data = req.body
  const file = req.files
  console.log("ini data",data);
  console.log("ini file",file);
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
   }
   if (!req.body) {
    return res.status(400).send('No request body found');
   }
  
  try {
    // const user = await prisma.book.create({
    //   data : <Prisma.BookCreateInput> {
    //     title: data.title,
    //     category: data.category,
    //     authorId: data.authorId,
    //     penerbit: data.penerbit,
    //     thn_terbit: data.thn_terbit,
    //     image: file?.values,
    //     createdAt: "12-10-2021",
    //     updateAt: "12-05-2021"
    //   },
    // });
    res.send("user")
  } catch (err) {
    console.log(err);
    
  }
}
