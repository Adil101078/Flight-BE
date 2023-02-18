import { DataTypes } from "sequelize";
import Database from "../core/database";

const Booking_Product_Passenger = Database.define("Booking_Product_Passenger", {
        Passenger_ID:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        Booking_Id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Booking_Product_Master",
                key: "Booking_Id"
                }
        },
        Product_Id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Booking_Product_Details",
                key: "Product_Id"
                }
        },
        Passenger_Title:{
            type:DataTypes.STRING,
            defaultValue:""
        },
        Passenger_First_Name:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Passenger_Middle_Name:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Passenger_Last_Name:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Passenger_DOB:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Passenger_Type:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Passenger_Gender:{
            type: DataTypes.ENUM,
            values:["Male", "Female", "Other"],
            defaultValue:""
        },
        Last_Modified_By:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Last_Modified_DateTime:{
            type: DataTypes.DATE,
            defaultValue: Date.now()
        },
        Passenger_ETicket:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Checkin_Baggage:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Checkin_Bag_Unit:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        HandBaggage:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        HandBaggage_Unit:{
            type: DataTypes.STRING,
            defaultValue:""
        }
        
    },{
        freezeTableName: true,
        timestamps: false,
});


export default Booking_Product_Passenger