import { Router } from "express";
import { addBook, getBooks } from "../controllers/Books.controller";

const booksRoute = Router();

booksRoute.get("/books", getBooks)
booksRoute.post("/addbook", addBook)
booksRoute.put("/addbook/:id", addBook)

export default booksRoute;