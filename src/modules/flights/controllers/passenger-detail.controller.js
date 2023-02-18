import _ from "lodash"
import { App } from "../../../core/globals";
import moment from "moment"

export default async function RenderPassengerDetail(req, res){
    const contact_us = App.Config.CONTACT_US;
    const _response = localStorage.getItem('selected_result')
    const response = JSON.parse(_response)    
    const travellers = []
    console.log(response.priceBreakup)
    if((response.priceBreakup.filter((e)=>e.passengerType === 'ADT')).length > 0){
      const adt = response.priceBreakup.find((e)=>e.passengerType === 'ADT')
     for(let i=0;i<adt.noOfPassenger; i++ ){
      let obj ={
        type: adt.passengerType,
        title: 'Adult'
      }
      travellers.push(obj)
     }
    }
    if((response.priceBreakup.filter((e)=>e.passengerType === 'CNN')).length > 0){
      const adt = response.priceBreakup.find((e)=>e.passengerType === 'CNN')
     for(let i=0;i<adt.noOfPassenger; i++ ){
      let obj ={
        type: adt.passengerType,
        title:'Child'
      }
      travellers.push(obj)
     }
    }
    
    if((response.priceBreakup.filter((e)=>e.passengerType === 'INF')).length > 0){
      const adt = response.priceBreakup.find((e)=>e.passengerType === 'INF')
     for(let i=0;i<adt.noOfPassenger; i++ ){
      let obj ={
        type: adt.passengerType,
        title: 'Infant'
      }
      travellers.push(obj)
     }
    }
    console.log(travellers)
    const data = { _, moment, response,travellers, contact_us }
    return res.render('flight/passenger-detail', { data })
}