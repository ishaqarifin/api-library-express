import { Request, Response } from "express";
import prisma from "../prisma/prisma";

export const addLoan =async (req:Request, res: Response) => {
  const data = req.body;

  try {
    const result = await prisma.pinjaman.create({
      data: {
        kode_pinjaman: data.kode_pinjaman,
        no_book: data.no_book,
        tgl_kembali: data.tgl_kembali,
        tgl_pinjaman: data.tgl_pinjaman,
        updatedAt: data.updatedAt,
        member: {
          connect: {id: data.member}
        }
      }
    })
    res.status(200).send({
      status: "success",
      message: result
    })
    
  } catch (error) {
    res.status(400).send({
      status: "false",
      message: "server error"
    })
    console.log(error);
  }
}

export const getLoan =async (req:Request, res: Response) => {
  const {id} = req.params;
  try {
    const result = await prisma.pinjaman.findUnique({
      where: {
        id: Number (id)
      },
      include: {
        member: {
          select: {
            name: true,
            no_identity: true
          }
        }
      }
    })
    res.status(200).send({
      status: "success",
      data: result
    })
  } catch (error) {
    res.status(400).send({
      status: "false",
      message: "server error"
    }
    )
  }
}

export const getLoans =async (req:Request, res: Response) => {
  try {
    const result = await prisma.pinjaman.findMany()

    res.status(200).send({
      status: "success",
      data: result
    })
  } catch (error) {
    res.status(400).send({
      status: "false",
      message: "server error"
    })
  }
}

export const deleteLoan =async (req:Request, res: Response) => {
  const id = req.params;

  try {
    const result = await prisma.pinjaman.delete({
      where: {id: Number (id)}
    })
    res.status(200).send({
      status: "success",
      message: `delete data from id: ${id}`
    })
  } catch (error) {
    res.status(400).send({
      status: "false",
      message: "server error"
    })
  }
}