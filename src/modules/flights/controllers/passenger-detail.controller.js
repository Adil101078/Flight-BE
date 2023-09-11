import _ from "lodash"
import { App } from "../../../core/globals";
import moment from "moment"
import Constants from "../../../core/constants";

export default async function RenderPassengerDetail(req, res){
    const { Origin, Destination, jtype } = req.query
    const travellers = []
    const contact_us = App.Config.CONTACT_US

    if(!req.session.result) return res.redirect('/')

    const response = req.session.result

    // Get the price breakup for passenger type adult
    if((response.priceBreakup.filter((e)=>e.passengerType === Constants.PASSENGER_TYPE.ADT)).length > 0){
      const adt = response.priceBreakup.find((e)=>e.passengerType === Constants.PASSENGER_TYPE.ADT)
     for(let i=0;i<adt.noOfPassenger; i++ ){
      let obj ={
        type: adt.passengerType,
        title: Constants.PASSENGER_TYPE.ADULT
      }
      travellers.push(obj)
     }
    }

    // Get the price for passenger type child
    if((response.priceBreakup.filter((e)=>e.passengerType === Constants.PASSENGER_TYPE.CNN)).length > 0){
      const adt = response.priceBreakup.find((e)=>e.passengerType === Constants.PASSENGER_TYPE.CNN)
     for(let i=0;i<adt.noOfPassenger; i++ ){
      let obj ={
        type: adt.passengerType,
        title: Constants.PASSENGER_TYPE.CHILD
      }
      travellers.push(obj)
     }
    }

    // Get the price for passenger type infant
    if((response.priceBreakup.filter((e)=>e.passengerType === Constants.PASSENGER_TYPE.INF)).length > 0){
      const adt = response.priceBreakup.find((e)=>e.passengerType === Constants.PASSENGER_TYPE.INF)
     for(let i=0;i<adt.noOfPassenger; i++ ){
      let obj ={
        type: adt.passengerType,
        title: Constants.PASSENGER_TYPE.INFANT
      }
      travellers.push(obj)
     }
    }
    const data = { _, moment, response, travellers, contact_us, Origin, Destination, jtype }
    return res.render('flight/passenger-detail', { data })
}