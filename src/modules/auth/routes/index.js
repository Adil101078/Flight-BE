import { Router } from "express";
import { AuthController } from "../controllers";

const Controller = new AuthController()

const router = Router()

router.post('/login', Controller.Login)

export const AuthRouter = router