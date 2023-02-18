import { RequestHandler } from "../../../core/utils"
import Airport_Details from "../../../models/airportDetails.model"
import { Op } from "sequelize"


export default async function Search(req, res){
    const { origin } = req.query

    const query = {
        [Op.or]:
                [
                    { Airport_Code:{ [Op.startsWith]: origin }},
                    { City_Code:{ [Op.startsWith]: origin }},
                    { City_Name:{ [Op.startsWith]: origin }}
                ]
    }

    const data = await Airport_Details.findAll({ where:query, order:[['Airport_Name', 'ASC']] })
    

    return RequestHandler.Success({ res, data, message: 'Airline Details fetched successfully.'})
}