import { DataTypes } from "sequelize";
import Database from "../core/database";

const Contact_Details = Database.define("Contact_Details", {
        Sno:{
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
        Pax_ID:{
            type:DataTypes.STRING,
            defaultValue:""
        },
        PhoneNo:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        MobileNo:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        FAX:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Email_Address:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Country:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        State:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        City:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Address1:{
            type: DataTypes.TEXT,
            defaultValue:""
        },
        Address2:{
            type: DataTypes.TEXT,
            defaultValue:""
        },
        Post_Code:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Address_Type:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        ModifiedBy:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        ModifiedDate:{
            type: DataTypes.DATE,
            defaultValue: Date.now()
        }
        
    },{
        freezeTableName: true,
        timestamps: false,
});


export default Contact_Details