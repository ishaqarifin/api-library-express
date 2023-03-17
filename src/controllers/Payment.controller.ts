import { Request, Response } from "express";
import prisma from "../prisma/prisma";

export const addPayment =async (req:Request, res: Response) => {
  const data = req.body;
  try {
    const result = await prisma.pembayaran.create({
      data: {
        bukti_pembayaran: data.bukti_pembayaran,
        updatedAt: data.updatedAt,
        member: {
          connect: {id: data.member}
        },
        createdAt: data.createdAt
      }
    })
    res.status(200).send({
      status: "true",
      data: result
    })
  } catch (error) {
    res.status(400).send({
      status: "false",
      message: "server error"
    })
  }
}

export const getPayments =async (req:Request, res: Response) => {
  try {
    const result = await prisma.pembayaran.findMany({
      include: {
        member: {select: {name: true}}
      }
    })
    res.status(200).send({
      status: "true",
      data: result
    })
  } catch (error) {
    res.status(400).send({
      status: "false",
      message: "server error"
    })
  }
}

export const getPayment =async (req:Request, res:Response) => {
  const id = req.params;

  try {
    const result = await prisma.pembayaran.findFirst({
      where: {id: Number (id)},
      include: {
        member: {select: {name: true}}
      }
    })
  } catch (error) {
    res.status(400).send({
      status: "false",
      message: "server error"
    })
  }
}

export const updatePayment =async (req:Request, res:Response) => {
  const data = req.body;
  const id = req.params;

  try {
    const result = await prisma.pembayaran.update({
      where: {
        id: Number(id)
      },
      data: {
        bukti_pembayaran: data.bukti_pembayaran,
        createdAt: data.createdAt,
      }
    })
    res.status(200).send({
      status: "true",
      message: "success"
    })
  } catch (error) {
    res.status(400).send({
      status: "false",
      message: "server error"
    })
  }
}

export const deletePayment =async (req:Request, res:Response) => {
  const id = req.params;
  try {
    const result = await prisma.pembayaran.delete({
      where: {id: Number(id)}
    })

    res.status(200).send({
      status: "true",
      message: `data delete from id ${id}`
    })
  } catch (error) {
    res.status(200).send({
      status: "false",
      message: "server error"
    })
  }
}