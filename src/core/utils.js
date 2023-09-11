import { App } from "./globals";
import fs from "fs";
import _ from 'lodash'
import moment from "moment";

export const FileExistsSync = (FilePath) =>
  fs.existsSync(`${FilePath}.js`) || fs.existsSync(`${FilePath}.ts`);

export function GenerateRandomStringOfLength(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function GenerateRandomNumberOfLength(length) {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function Wrap(controller) {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      Logger.error(error);
      return _RequestHandler.Error({ res, message: error.message, error });
    }
  };
}

export const BasicAuthCredentialFetch = (options) => {
  const { authorization } = options;
  if (!authorization || authorization.indexOf("Basic ") === -1) {
    return null;
  }

  // verify auth credentials
  const base64Credentials = authorization.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");
  return {
    username,
    password,
  };
};

const _RequestHandler = {
  Success: ({ res, statusCode = 200, message = "Success", data }) => {
    if (statusCode >= 300) {
      throw Error(
        "User RequestHandler.Error() function instead to serve error responses"
      );
    }
    return res.status(statusCode).json({
      "x-request-session": res["x-request-session"],
      result: 1,
      statusCode,
      message,
      data,
    });
  },

  Error: ({ res, statusCode = 500, message = "Error", error }) => {
    if (statusCode < 300) {
      throw Error(
        "User RequestHandler.Success() function instead to serve Success responses"
      );
    }
    if (statusCode === 401) {
      throw Error(
        "User RequestHandler.Unauthorized() function instead to serve Unauthorized responses"
      );
    }
    if (statusCode === 422) {
      throw Error(
        "User RequestHandler.Unprocessable() function instead to serve Unprocessable responses"
      );
    }

    return res.status(statusCode).json({
      "x-request-session": res["x-request-session"],
      result: 0,
      statusCode,
      message,
      error,
    });
  },

  Unprocessable: ({ res, message = "Unprocessable Entity", error }) => {
    return res.status(422).json({
      "x-request-session": res["x-request-session"],
      result: 0,
      statusCode: 422,
      message,
      error,
    });
  },

  Unauthorized: ({ res }) => {
    return res.status(401).json({
      "x-request-session": res["x-request-session"],
      result: 0,
      statusCode: 401,
      message: "Unauthorized! you're not authorized for this route!",
    });
  },
};
export const RequestHandler = _RequestHandler;

export const RequestValidator = (DTO, data = {}) => {
  const validationResult = DTO.validate(data);
  if (validationResult.error) {
    const errors = [];
    for (let i = 0; i < validationResult.error.details.length; i++) {
      errors.push(validationResult.error.details[i].message);
    }
    validationResult.errors = errors;
  }
  return validationResult;
};

export const sleepInAsync = async (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

export const CapitalizeFirstLetter = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const FlightPayload = ({
  Origin,
  Destination,
  Departure,
  jType = "Oneway",
  ReturnDate = null,
  Adults,
  Childs,
  Infants,
  ClassOfService
})=>{
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
  return RequestParams
}









