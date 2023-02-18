import { Router } from "express";
import { Wrap } from "../../../core/utils";
import homeController from "../controllers/home.controller";

const router = Router()

router.get('/', Wrap(homeController))

export const HomeRouter = router