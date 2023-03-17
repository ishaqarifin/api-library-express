import { Router } from "express";
import { userLogin, Register } from "../controllers/auth.controller";
import { addUser, getUser } from "../controllers/User.controllers";
import { verifyToken } from "../middleware/authentication.token";
import upload from "../middleware/multer.middleware";
import { addBook, deleteBook, getBooks, updateBook } from "../controllers/Books.controller";
import { addLoan, deleteLoan, getLoan, getLoans } from "../controllers/Loan.controller";

const Route = Router()
Route.post('/login', userLogin)
Route.post('/register', Register)
Route.get('/user', verifyToken, getUser)
Route.post('/adduser', upload.single('image'), addUser)
Route.get('/books', getBooks)
Route.post('/addbook', addBook)
Route.put('/updatebook/:id', updateBook)
Route.delete('/deletebook/:id', deleteBook)

Route.get('/loans', getLoans)
Route.get('/loan/:id', getLoan)
Route.post('/addloan', addLoan)
Route.delete('/deleteloan', deleteLoan)

export default Route

// const authRoute = require("./auth.route")
// const userRoute = require("./User.route")

// module.exports = {
// authRoute,
// userRoute
// }