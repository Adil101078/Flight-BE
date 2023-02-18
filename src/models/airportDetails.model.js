import { DataTypes } from "sequelize";
import Database from "../core/database";

const Airport_Details = Database.define("Airport_Details", {
        Airport_DetailsId: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        City_Name: {
            type: DataTypes.STRING,
        },
        Country_Name: {
            type: DataTypes.STRING,
        },
        Country_Code_3Letter: {
            type: DataTypes.STRING,
        },
        Airport_Name:{
            type: DataTypes.STRING
        },
        Airport_Code:{
            type: DataTypes.STRING
        },
        City_Code:{
            type: DataTypes.STRING
        },
        INS_GEO_Code:{
            type: DataTypes.STRING
        },
        Continent_Name:{
            type: DataTypes.STRING
        },
        Continent_Code:{
            type: DataTypes.STRING
        },
        Language_Code:{
            type:DataTypes.STRING
        },
        Country_Code:{
            type: DataTypes.STRING
        }
        
    },{
        freezeTableName: true,
        timestamps: false,
});


export default Airport_Details
