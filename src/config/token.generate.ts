import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const generateToken: any = function generate(user:any) {
  console.log('masuk');
  
  const tokenSecret: string = 'koderahasia';
  return jwt.sign({data: user}, tokenSecret, {expiresIn: process.env.SECRET_KEY_TOKEN} )
}

export default generateToken;