import _ from "lodash"
import { App } from "../../../core/globals"
import moment from "moment"

export default async function Wait(req, res){
    const { Origin, Departure, Destination, Adults, Infants, Childs, ClassOfService, jType, ReturnDate  } = req.query
    const data = {
        Origin, 
        Departure, 
        Destination,
        Adults,
        Infants,
        Childs, 
        ClassOfService, 
        jType: jType == 'r'? 'Return': 'Oneway',
        TotalPassengers: _.toNumber(Adults)+_.toNumber(Childs)+_.toNumber(Infants),
        ReturnDate: ReturnDate? ReturnDate: 'no',
        contact_us: App.Config.CONTACT_US,
        moment
    }
    
    return res.render('flight/waitPage', { data })
}