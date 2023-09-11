import { Router } from "express"
import { Wrap } from "../../../core/utils"
import controllers from "../controllers/index"
import FlightController from '../controllers/index'

const router = Router()

// Renders routes
router.get('/search', Wrap(FlightController.Search))
router.get('/wait', Wrap(FlightController.Wait))
router.get('/result', Wrap(FlightController.FlightResult))
router.get('/passenger-detail', Wrap(FlightController.RenderPassengerDetail))
router.get('/booking-confirmation', Wrap(controllers.RenderBookingConfirmedPage))


router.post('/search-request', Wrap(FlightController.SearchRequest))
router.post('/create-booking', Wrap(FlightController.CreateBookig))
router.post('/passenger-detail', Wrap(FlightController.SearchRequest))

export const FlightRouter = router