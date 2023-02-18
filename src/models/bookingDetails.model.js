import { DataTypes } from "sequelize";
import Database from "../core/database";

const Booking_Product_Details = Database.define("Booking_Product_Details", {
        Product_Id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            defaultValue: 1
        },
        Booking_Id: {
            primaryKey: true,
            type: DataTypes.STRING,
            references: {
                model: "Booking_Product_Master",
                key: "Booking_Id"
            }
        },
        Product_Type_Code:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_Status:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_Book_By:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_Manage_By:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_Invoice_No:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_Invoice_Date:{
            type: DataTypes.DATE,
        },
        Product_Supplier_Code:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_PNR_Confirmation:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_Net_Amount:{
            type: DataTypes.DECIMAL,
            defaultValue:0
        },
        Product_Latest_Remarks:{
            type: DataTypes.TEXT,
            defaultValue:""
        },
        Product_isLocked:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        Product_isLocked_By:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_inUse:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        Product_inUse_By:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Creation_Date:{
            type: DataTypes.DATE,
            
        },
        Product_Lead_Ref:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_Airlines_Ref:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_Next_Followup_Date:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_Booking_Type:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Product_Credit_Expiry_Date:{
            type: DataTypes.DATE,
        },
        Campaign_Id:{
            type: DataTypes.STRING,
            defaultValue: ""
        },
        
    },{
        freezeTableName: true,
        timestamps: false,
});


export default Booking_Product_Details
