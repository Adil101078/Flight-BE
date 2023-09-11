import { DataTypes } from "sequelize";
import Database from "../core/database";

const Amount_Charges_Detail = Database.define("Amount_Charges_Detail", {
        SNO:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
           
        },
        BOK_MST_Booking_ID: {
            type: DataTypes.STRING,
            references: {
                model: "Booking_Product_Master",
                key: "Booking_Id"
                }
        },
        BOK_DTL_Prod_Booking_ID: {
            type: DataTypes.INTEGER,
            references: {
                model: "Booking_Product_Details",
                key: "Product_Id"
                }
        },
        AMT_CHG_MST_Category:{
            type:DataTypes.STRING,
            defaultValue:""
        },
        AMT_CHG_MST_Charge_Type:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        AMT_CHG_DTL_Charges_For:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        AMT_CHG_DTL_Cost_Price:{
            type: DataTypes.DECIMAL,
        },
        AMT_CHG_DTL_Sell_Price:{
            type: DataTypes.DECIMAL
        },
        AMT_CHG_DTL_Charges_Status:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        AMT_CHG_DTL_Supplier_ID:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        AMT_CHG_DTL_Charges_Remarks:{
            type: DataTypes.TEXT,
            defaultValue:""
        },
        AMT_CHG_DTL_Charges_Date:{
            type: DataTypes.DATE,
        },
        AMT_CHG_DTL_ModifiedBy:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        AMT_CHG_DTL_PaxId:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        AMT_CHG_DTL_ModifiedDate:{
            type: DataTypes.DATE
        }
        
    },{
        freezeTableName: true,
        timestamps: false,
        initialAutoIncrement: 1
});


export default Amount_Charges_Detail