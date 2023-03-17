import { NextFunction, Request, Response, request } from 'express'
import Jwt from 'jsonwebtoken'

// const auth: any = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization

//   console.log(token);
  

//   if (!token) {
//     res.status(404).send({
//       status: "failed",
//       message: "access denied"
//     })
//   }

//   try {
//       const SECRET_KEY = 'koderahasia'
//       const verifyToken = Jwt.verify(token!, SECRET_KEY)
//       (<any>req).user = verifyToken
//     } catch (error) {
//       res.status(404).send({
//         status: "failed",
//         message: "invailed token"
//       })
//     }
// }
// export default auth;

interface jwtPayload {
  id: number;
  username: string;
  iat: number;
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
console.log(token);

  if (!token) {
    res.status(401).send({
      status: 'failed',
      message: 'access denied'
    })
  }

  try {
    const decode = Jwt.verify(token!, process.env.SECRET_KEY_TOKEN!) as unknown;
    (<any>req).id = decode
  
    console.log('ini decode',decode);
    next()
  } catch (error) {
    res.status(400).send({
      status: 'failed',
      message: 'token invalid'
    })
  }
}