import { App } from "../../../core/globals";
import _ from "lodash";
import axios from "axios";
import moment from "moment";
import { FlightPayload } from "../../../core/utils";

export default async function FlightResult(req, res) {
  const {
    Origin,
    Departure,
    Destination,
    Adults,
    Infants,
    Childs,
    ClassOfService,
    jType,
    ReturnDate,
   
  } = req.query;

  let data = {
    _,
    moment,
    Origin,
    Departure,
    Destination,
    Adults,
    Infants,
    Childs,
    ClassOfService,
    jType,
    ReturnDate,
    TotalPassengers: _.toNumber(Adults) + _.toNumber(Childs) + _.toNumber(Infants),
  }
const RequestParams = FlightPayload({
  Origin,
  Destination,
  Departure,
  jType,
  ReturnDate,
  Adults,
  Childs,
  Infants,
  ClassOfService
})


  const config = {
    method: "post",
    url: App.Config.GET_LOW_FARE_ENDPOINT,
    headers: {
      "Content-Type": "application/json",
    },
    data: RequestParams,
  };
  console.log(RequestParams)
  const contact_us = App.Config.CONTACT_US;
  const { data: response } = await axios(config)

  const _response = response

  let session = req.session
  session.result = _response




  data = { _response, contact_us, ...data }
  return res.render("flight/resultPage", { data });
}
