import { Router } from "express";
import { AuthRouter } from "./modules/auth/routes";
import { FlightRouter } from "./modules/flights/routes";
import { HomeRouter } from "./modules/home/routes";
const router = Router();

router.use('/auth', AuthRouter)
router.use('/', HomeRouter)
router.use('/flight', FlightRouter)


export default router
