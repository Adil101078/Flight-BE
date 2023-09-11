import Constants from "../../../core/constants"
import { RequestHandler } from "../../../core/utils"
import Amount_Charges_Detail from "../../../models/amount-charge-detail.models"
import Booking_Product_Details from "../../../models/bookingDetails.model"
import Booking_Product_Passenger from "../../../models/bookingPassenger.model"
import Booking_Product_Master from "../../../models/bookingProductMaster.model"
import Card_Details from "../../../models/card-detail.models"
import Contact_Detail from "../../../models/contact.model"
import Referance_Creator from "../../../models/reference-creator.model"
import Sector_Master from "../../../models/sectorMaster.model"
import Segment_Details from "../../../models/segmentDetail.model"
import moment from "moment"

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
    const { result: response } = req.session
    if(!response) return RequestHandler.Error({
      message: 'Session Expired.',
      statusCode: 401
    })
    /** Insert data into Booking Product Master table */
    const booking = await Booking_Product_Master.create({
        Booking_Status: Constants.STATUS.PENDING,
        Booking_Currency: data.currency,
        Booking_Id: await CreateBookingID("CFUS")
    })


    /** Insert data into Product_Detail table */
    const productDetal = await Booking_Product_Details.create({
        Booking_Id: booking.Booking_Id,
        Product_Status: booking.Booking_Status,
        Product_Book_By:"",
        Product_Id: 1,
        Product_Net_Amount: +data.totalPrice

    })

     /** Insert data into Segment Master table */
    const sectorMaster = await Sector_Master.create({
      Booking_Id: booking.Booking_Id,
      Product_Id: productDetal.Product_Id,
      Journey_Type: data.jtype,
      Origin: data.origin,
      Destination: data.destination,
      Validating_Carrier: data.valCarrier,
      Last_Ticketing_Date:data.lastTicketingDate,
      Fare_Family: data.fareFamily,
      Ticket_Issued_Date: "",
      Last_Modified_By:""
    })

    // Insert data into segment master table
    for(let i=0; i< response.sectors.length; i++){
      const segmentMaster = await Segment_Details.create({
        Booking_Id: booking.Booking_Id,
        Product_Id: productDetal.Product_Id,
        Segment_Carrier: 'a',
        Segment_Departure: response.sectors[i]?.departure.cityCode,
        Segment_Arrival: response.sectors[i]?.arrival.cityCode,
        Segment_Flight_No: response.sectors[i]?.fltNum,
        Segment_Cabin_Class: response.sectors[i]?.cabinClass,
        Segment_Class_of_Service: response.sectors[i]?.class,
        Segment_Status: response.sectors[i]?.status,
        Segment_Farebasis: response.sectors[i]?.fareBasisCode,
        Segment_Not_Valid_Before: response.sectors[i]?.departure.date,
        Segment_Not_Valid_After: response.sectors[i]?.arrival.date,
        Segment_Departure_Terminal: response.sectors[i]?.departure?.terminal,
        Segment_Arrival_Terminal: response.sectors[i]?.arrival?.terminal,
        Segment_Id: i+1,
        Segment_Remarks: "",
        Segment_Group_Id: +response.sectors[i]?.group,
        Segment_Flying_Time: response.sectors[i]?.flyingTime,
        Segment_Travel_Time: response.sectors[i]?.travelTime,
        Segment_Layover_Time: response.sectors[i]?.transitTime?.time,
        Segment_Baggage_Adult: response.sectors[i]?.baggageInfo.split(' ')[0],
        Segment_Baggage_Child: response.sectors[i]?.baggageInfo.split(' ')[0],
        Segment_Baggage_Infant: response.sectors[i]?.baggageInfo.split(' ')[0],
        Segment_Operating_Carier: response.sectors[i]?.operatingCarrier?.name || "",
        Segment_Operating_Flight_No: response.sectors[i]?.operatingCarrier?.flightNumber || "",
        Segment_EquipType: response.sectors[i]?.equipType,
        Segment_Departure_Date_Time:new Date(moment(response.sectors[i]?.departure.dateTimeStamp).format('YYYY-MM-DD HH:mm:ss.SSS')),
        Segment_Arrival_Date_Time: new Date(moment(response.sectors[i]?.arrival.dateTimeStamp).format('YYYY-MM-DD HH:mm:ss.SSS')),        

      })

    }
   
    
     /** Insert data into Passenger Details table */
    const pax = data.passengers
    let contact_details = []
    for(let i=0;i<pax.length;i++){
      const Pax_Det = await Booking_Product_Passenger.create({
        Booking_Id: booking.Booking_Id,
        Product_Id: productDetal.Product_Id,
        Passenger_ID: i+1,
        Passenger_Title: pax[i]?.title,
        Passenger_First_Name: pax[i]?.firstName,
        Passenger_Middle_Name: pax[i]?.middleName,
        Passenger_Last_Name: pax[i]?.lastName,
        Passenger_DOB: `${pax[i]?.day}-${pax[i]?.month}-${pax[i]?.year}`,
        Passenger_Type: pax[i]?.type,
        Passenger_Gender: pax[i]?.gender,
        Checkin_Baggage:  response.sectors[0].baggageInfo.split(' ')[0],
        Checkin_Bag_Unit:  response.sectors[0].baggageInfo.split(' ')[1],
        HandBaggage: response.sectors[0].handBaggage.split(' ')[0],
        HandBaggage_Unit: response.sectors[0].handBaggage.split(' ')[1]
      })
      contact_details.push(Pax_Det)
    }
    console.log(contact_details[0])

    /** Insert data into Contact Details table */
    const contactData = await Contact_Detail.create({
      Booking_Id: booking.Booking_Id,
      Product_Id: productDetal.Product_Id,
      Pax_ID: contact_details[0]?.Passenger_ID || 1,
      MobileNo: data.mobile,
      Email_Address: data.email,
      Country: data.country,
      State: data.region,
      City: data.city,
      Address1: data.address1,
      Address2: data.address2,
      Post_Code: data.postal,
      Address_Type: "Home"

    })
     /** Insert data into Card-Detail table */
    await Card_Details.create({
      Ref_Id: booking.Booking_Id,
      Card_Holder: data.cardHolder,
      Card_Number: data.cardNumber,
      CVV: data.cardCvv,
      ExpiryMonth: data.cardExpMonth,
      ExpiryYear: data.cardExpYear,
      Ref_Type:"Docket",
      Card_Type:""
    })

     /** Insert data into Amount Charge Details table */
    // for(let i=0; i<= data.priceBreakup; i++){
    //   const amountChargeDetails = await Amount_Charges_Detail.create({
    //     BOK_MST_Booking_ID: booking.Booking_Id,
    //     BOK_DTL_Prod_Booking_ID: productDetal.Product_Id,
    //     AMT_CHG_MST_Category: "",
    //     AMT_CHG_MST_Charge_Type: data.priceBreakup[i]?.baseFare ,
    //     AMT_CHG_MST_Charge_Type: "All"
    //   })
    // }

    return RequestHandler.Success({ res, data: booking })
}