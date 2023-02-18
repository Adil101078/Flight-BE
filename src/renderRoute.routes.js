import { Router } from "express";
import { FlightRouter } from "./modules/flights/routes";
import { HomeRouter } from "./modules/home/routes";
const clientRouter = Router();

clientRouter.use('/', HomeRouter)
clientRouter.use('/wait', FlightRouter)
export default clientRouter;
