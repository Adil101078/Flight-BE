import { DataTypes } from "sequelize";
import Database from "../core/database";

const Segment_Details = Database.define("Segment_Details", {
        Sno:{
            type: DataTypes.INTEGER,
            primaryKey:true
        },
        Booking_Id: {
            type: DataTypes.STRING,
            references: {
                model: "Booking_Product_Master",
                key: "Booking_Id"
                }
        },
        Product_Id: {
            type: DataTypes.STRING,
            references: {
                model: "Booking_Product_Details",
                key: "Product_Id"
                }
        },
        Segment_Carrier:{
            type:DataTypes.STRING(3),
            defaultValue:""
        },
        Segment_Departure:{
            type: DataTypes.STRING(3),
            defaultValue:""
        },
        Segment_Arrival:{
            type: DataTypes.STRING(3),
            defaultValue:""
        },
        Segment_Flight_No:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Cabin_Class:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Class_of_Service:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Status:{
            type: DataTypes.STRING,            
            defaultValue:""
        },
        Segment_Farebasis:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Not_Valid_Before:{
            type: DataTypes.STRING,
            defaultValue: ""
        },
        Segment_Not_Valid_After:{
            type: DataTypes.STRING,
            defaultValue: ""
        },
        Segment_Departure_Terminal:{
            type: DataTypes.STRING,
            defaultValue: ""
        },
        Segment_Arrival_Terminal:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Id:{
            type: DataTypes.INTEGER,
            defaultValue:""
        },
        Segment_Group_Id:{
            type: DataTypes.INTEGER,
            defaultValue:""
        },
        Segment_Remarks:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_ModifiedBy:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_ModifiedDate:{
            type: DataTypes.DATE,
            defaultValue: Date.now()
        },
        Segment_Flying_Time:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Travel_Time:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Layover_Time:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Baggage_Adult:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Baggage_Child:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Baggage_Infant:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Operating_Carier:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_Operating_Flight_No:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Segment_EquipType:{
            type: DataTypes.STRING,
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
        Segment_Departure_Date_Time:{
            type: DataTypes.DATE,
            defaultValue: Date.now()
        },
        Segment_Arrival_Date_Time:{
            type: DataTypes.DATE,
            defaultValue: Date.now()
        },
        
        
    },{
        freezeTableName: true,
        timestamps: false,
});


export default Segment_Details