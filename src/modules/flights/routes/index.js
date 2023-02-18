import { Router } from "express"
import { Wrap } from "../../../core/utils"
import controllers from "../controllers/index"
import FlightController from '../controllers/index'

const router = Router()

router.get('/search', Wrap(FlightController.Search))
router.get('/wait', Wrap(FlightController.Wait))
router.get('/result', Wrap(FlightController.FlightResult))
router.post('/search-request', Wrap(FlightController.SearchRequest))
router.post('/passenger-detail', Wrap(FlightController.SearchRequest))
router.get('/passenger-detail', Wrap(FlightController.RenderPassengerDetail))
router.post('/create-booking', Wrap(FlightController.CreateBookig))

export const FlightRouter = router