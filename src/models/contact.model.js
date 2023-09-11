import { DataTypes } from "sequelize";
import Database from "../core/database";

const Contact_Detail = Database.define("Contact_Detail", {
        SNo:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            allowNull: false
           
        },
        Booking_Id: {
            type: DataTypes.STRING,
            primaryKey: true,
            references: {
                model: "Booking_Product_Master",
                key: "Booking_Id"
            },
            allowNull: false
        },
        Product_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: "Booking_Product_Details",
                key: "Product_Id"
            },
            allowNull: false
        },
        Pax_ID:{
            type:DataTypes.STRING,
            primaryKey: true,
            allowNull: false
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
            type: DataTypes.DATE
        }
        
    },{
        freezeTableName: true,
        timestamps: false,
        initialAutoIncrement:1
});


export default Contact_Detail