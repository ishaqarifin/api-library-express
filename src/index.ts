import express from "express";
import { env } from "process";
import routes from "./routes";

const app = express()
app.use(express.json())

app.use(routes)

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`server running on port ${port}`))

// DATABASE_URL="mysql://root:@localhost:3306/perpustakaan"

// PORT = 3002

// SECRET_KEY_TOKEN = "rahasia"