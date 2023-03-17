import { Router } from "express";

import { Register, userLogin } from "../controllers/auth.controller";
import { verifyToken } from "../middleware/authentication.token";
const express = require('express')

// const authRoute = Router();
const authRoute = express.Router()

authRoute.post('/register', Register)
authRoute.post('/login', verifyToken, userLogin)

module.exports = authRoute;