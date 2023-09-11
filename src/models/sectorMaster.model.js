import { DataTypes } from "sequelize";
import Database from "../core/database";

const Sector_Master = Database.define("Sector_Master", {
        Booking_Id: {
            type: DataTypes.STRING,
            primaryKey:true,
            references: {
                model: "Booking_Product_Master",
                key: "Booking_Id"
                }
        },
        Product_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: "Booking_Product_Details",
                key: "Product_Id"
                }
        },
        Journey_Type:{
            type:DataTypes.STRING,
            defaultValue:""
        },
        Origin:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Destination:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Validating_Carrier:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Last_Ticketing_Date:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Fare_Family:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Ticket_Issued_Date:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Last_Modified_DateTime:{
            type: DataTypes.DATE
        },
        Last_Modified_By:{
            type: DataTypes.STRING,
            defaultValue:""
        }
        
    },{
        freezeTableName: true,
        timestamps: false,
});


export default Sector_Master