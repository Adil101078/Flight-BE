import { App } from "../../../core/globals";
import { RequestHandler } from "../../../core/utils";
import _ from "lodash";
import moment from 'moment'
import Booking_Product_Master from "../../../models/bookingProductMaster.model";
import Contact_Detail from "../../../models/contact.model";
import Booking_Product_Passenger from "../../../models/bookingPassenger.model";

export default async function RenderBookingConfirmedPage(req, res) {
    const { bookingId } = req.query
    const { result } = req.session
    
    if (!result)
      return RequestHandler.Error({ res, message: "Session timeout." });
//   const result = {
//     jType: "Return",
//     origin: "DEL",
//     destination: "BOM",
//     uid: "480d41c3-2ba5-45b3-989d-110ba258592d",
//     baseFare: 135,
//     taxes: 21.58,
//     totalPrice: 156.58,
//     extraCharges: 0,
//     markUp: 0,
//     grandTotal: 156.58,
//     currency: "USD",
//     fareType: "",
//     accType: "",
//     pricingMethod: "Guaranteed",
//     bookingType: "Bookable",
//     fareFamily: "Regular Fare",
//     brandedFare: "Economy Basic",
//     promotionalFare: false,
//     refundableFare: false,
//     indexNumber: 0,
//     provider: "1G",
//     valCarrier: "AI",
//     lastTicketingDate: "2023-04-10T23:59:00.000+01:00",
//     travelTime: null,
//     priceBreakup: [
//       {
//         passengerType: "ADT",
//         noOfPassenger: 1,
//         tax: 21.58,
//         baseFare: 135,
//         markUp: 0,
//         taxBreakup: [],
//       },
//     ],
//     sectors: [
//       {
//         isConnect: false,
//         airlineCode: "AI",
//         airlineName: "Air India",
//         class: "S",
//         cabinClass: "Economy",
//         bookingCounts: "",
//         noSeats: 5,
//         fltNum: "805",
//         equipType: "32N",
//         flyingTime: "02:10",
//         travelTime: "02:10",
//         techStopOver: 0,
//         status: null,
//         operatingCarrier: null,
//         marketingCarrier: null,
//         baggageInfo: "25 Kilograms",
//         handBaggage: "7 Kg",
//         transitTime: null,
//         key: "f4OtFa0CuDKAreXdnPAAAA==",
//         distance: "708",
//         eTicket: "Yes",
//         changeOfPlane: "False",
//         participantLevel: "Secure Sell",
//         optionalServicesIndicator: false,
//         vi_Connection: false,
//         availabilitySource: "P",
//         group: "0",
//         linkAvailability: "True",
//         polledAvailabilityOption: "Cached status used. Polled avail exists",
//         fareBasisCode: "SIP",
//         hostTokenRef: null,
//         apisRequirementsRef: "",
//         departure: {
//           terminal: "3",
//           date: "10-04-2023",
//           time: "20:00",
//           day: null,
//           dateTimeStamp: "2023-04-10T20:00:00.000+05:30",
//           code: "DEL",
//           name: "Indira Gandhi Intl New Delhi",
//           cityCode: "DEL",
//           cityName: "Delhi",
//           countryCode: "IN",
//           countryName: "India",
//         },
//         arrival: {
//           terminal: "2",
//           date: "10-04-2023",
//           time: "22:10",
//           day: null,
//           dateTimeStamp: "2023-04-10T22:10:00.000+05:30",
//           code: "BOM",
//           name: "Chhatrapati Shivaji",
//           cityCode: "BOM",
//           cityName: "Mumbai",
//           countryCode: "IN",
//           countryName: "India",
//         },
//       },
//       {
//         isConnect: false,
//         airlineCode: "AI",
//         airlineName: "Air India",
//         class: "U",
//         cabinClass: "Economy",
//         bookingCounts: "",
//         noSeats: 9,
//         fltNum: "816",
//         equipType: "32N",
//         flyingTime: "01:50",
//         travelTime: "01:50",
//         techStopOver: 0,
//         status: null,
//         operatingCarrier: null,
//         marketingCarrier: null,
//         baggageInfo: "25 Kilograms",
//         handBaggage: "7 Kg",
//         transitTime: null,
//         key: "f4OtFa0CuDKAzeXdnPAAAA==",
//         distance: "708",
//         eTicket: "Yes",
//         changeOfPlane: "False",
//         participantLevel: "Secure Sell",
//         optionalServicesIndicator: false,
//         vi_Connection: false,
//         availabilitySource: "P",
//         group: "1",
//         linkAvailability: "True",
//         polledAvailabilityOption: "Cached status used. Polled avail exists",
//         fareBasisCode: "UIP",
//         hostTokenRef: null,
//         apisRequirementsRef: "",
//         departure: {
//           terminal: "2",
//           date: "18-04-2023",
//           time: "21:05",
//           day: null,
//           dateTimeStamp: "2023-04-18T21:05:00.000+05:30",
//           code: "BOM",
//           name: "Chhatrapati Shivaji",
//           cityCode: "BOM",
//           cityName: "Mumbai",
//           countryCode: "IN",
//           countryName: "India",
//         },
//         arrival: {
//           terminal: "3",
//           date: "18-04-2023",
//           time: "22:55",
//           day: null,
//           dateTimeStamp: "2023-04-18T22:55:00.000+05:30",
//           code: "DEL",
//           name: "Indira Gandhi Intl New Delhi",
//           cityCode: "DEL",
//           cityName: "Delhi",
//           countryCode: "IN",
//           countryName: "India",
//         },
//       },
//     ],
//     hostTokens: null,
//     key: "f4OtFa0CuDKA0rXdnPAAAA==",
//     searchID: "00acdcfd-bdef-4959-83cf-3bfb43e295d3",
//     excessBaggages: null,
//     markupInfo: null,
//   };
  const booking = await Booking_Product_Master.findOne({
    where:{
        Booking_Id: bookingId
    }
  })
  const contact = await Contact_Detail.findOne({
    where:{
        Booking_Id: bookingId
    }
  })
  const pax = await Booking_Product_Passenger.findAll({
    where:{
        Booking_Id: bookingId
    }
  })

  const contact_us = App.Config.CONTACT_US;
  const data = {
    contact_us,
    result,
    _,
    moment,
    booking,
    contact,
    pax
  };
  return res.render("flight/bookingConfirmed", { data });
}
