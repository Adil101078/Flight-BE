import { App } from "../../../core/globals";
import _ from "lodash";
import axios from "axios";
import moment from "moment";
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  global.localStorage = new LocalStorage("./scratch");
}

// function removeDuplicates(originalArray, prop) {
//   var newArray = [];
//   var lookupObject  = {};

//   for(var i in originalArray) {
//      lookupObject[originalArray[i][prop]] = originalArray[i];
//   }

//   for(i in lookupObject) {
//       newArray.push(lookupObject[i]);
//   }
//    return newArray;
// }

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
  let Segments = [
    {
      Origin,
      Destination,
      DepartureDate: moment(new Date(Departure)).format("DD/MM/YYYY"),
      DepartureTime: App.Config.DEPARTURE_TIME,
      DepartureTimeTo: App.Config.DEPARTURE_TO,
      ClassOfService: null,
    }
  ]
  if(jType == "Return"){
    Segments.push({
      Origin: Destination,
      Destination:Origin,
      DepartureDate: moment(new Date(ReturnDate)).format("DD/MM/YYYY"),
      DepartureTime: App.Config.DEPARTURE_TIME,
      DepartureTimeTo: App.Config.DEPARTURE_TO,
      ClassOfService: null,
    })
  }


  const RequestParams = {
    Authentication: {
      CompanyId: App.Config.COMPANY_ID,
      CredentialId: App.Config.CREDENTIAL_ID,
      CredentialPassword: App.Config.CREDENTIAL_PASSWORD,
      CredentialType: App.Config.CREDENTIAL_TYPE,
    },
    TypeOfTrip: jType,
    Segments,
    PaxDetail: {
      Adults: _.toNumber(Adults),
      Child: _.toNumber(Childs),
      Infants: _.toNumber(Infants),
    },
    Flexi: 0,
    Direct: 3,
    ClassOfService,
    Airlines: [""],
    FareFamily: null,
    TravelType: null,
    RefundableOnly: "false",
    SearchId: "",
  };

  const config = {
    method: "post",
    url: `http://cfusapi.onlyfortravels.com/api/Search/GetLowfares`,
    headers: {
      "Content-Type": "application/json",
    },
    data: RequestParams,
  };
  
  const contact_us = App.Config.CONTACT_US;
  const { data: response } = await axios(config);

  const _response = response






  data = { _response, contact_us, ...data }
  return res.render("flight/resultPage", { data });
}
