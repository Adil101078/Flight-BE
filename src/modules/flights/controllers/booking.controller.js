import { RequestHandler } from "../../../core/utils"
import Booking_Product_Details from "../../../models/bookingDetails.model"
import Booking_Product_Master from "../../../models/bookingProductMaster.model"
import Referance_Creator from "../../../models/reference-creator.model"
`Booking_Master
Booking-Detail
Segment Master
Sector_Detail
Passenger_Detail
Amount_Charges_Detail
Card_Detal
Contact_Detail`

const CreateBookingID = async (Ref_Prefix)=>{
  const fetch = await Referance_Creator.findOne({ where : { Ref_Prefix }})
  if(fetch){
    const value = `${fetch?.Ref_Prefix }${+fetch?.Ref_Suffix + 1}`
    await Referance_Creator.increment('Ref_Suffix', { by: 1, where:{ Ref_Prefix }})
    return value
  }
  return Ref_Prefix
}

const GenerateProductID = async()=>{
    const ID = await Booking_Product_Details.findOne({ order: [
        ['Product_Id', 'DESC'],
    ],})
    if(ID) return +ID.Product_Id + 1
    return 1
}

export default async function CreateBookig(req, res){
    const data = req.body
    
    /** Insert data into Booking Product Master table */
    // const booking = await Booking_Product_Master.create({
    //     Booking_Status: "Pending",
    //     Booking_Currency: data.currency,
    //     Booking_Id: await CreateBookingID("CFUS")
    // })
    // // /** Insert data into Product_Detail table */
    // const productDetal = await Booking_Product_Details.create({
    //     Booking_Id: booking.Booking_Id,
    //     Product_Status: booking.Booking_Status,
    //     Product_Book_By:"",
    //     Product_Id: await GenerateProductID(),
    //     Product_Net_Amount: +data.grandTotal

    // })

    /** Insert data into Segment Master table */
    console.log(localStorage.getItem('selected_result'))
    
    /** Insert data into Contact-Details table */

    /** Insert data into Card-Detail table */
    return RequestHandler.Success({ res, data })
}