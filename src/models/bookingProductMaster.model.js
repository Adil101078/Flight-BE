import { DataTypes, Sequelize } from "sequelize";
import Database from "../core/database";

const Booking_Product_Master = Database.define("Booking_Product_Master", {
        Booking_Id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV1
        },
        Booking_Status:{
            type:DataTypes.ENUM,
            values:['Pending', 'Success', 'Failed'],
            defaultValue: 'Pending'
        },
        Booking_Currency:{
            type: DataTypes.STRING
        },
        Brand_Code:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Creation_Date:{
            type: DataTypes.DATE,
        },
        Booking_Type:{
            type: DataTypes.STRING,
            defaultValue: "Booking"
        }
        
    },{
        freezeTableName: true,
        timestamps: false,
});


export default Booking_Product_Master