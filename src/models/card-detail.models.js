import { DataTypes } from "sequelize";
import Database from "../core/database";

const Card_Details = Database.define("Card_Details", {
        Sno:{
            type: DataTypes.INTEGER,
            primaryKey: true,  
            autoIncrement:true    
        },
        Ref_Id:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Card_Holder:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Card_Number:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        CVV:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        Card_Type:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        User_Id:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        DatenTime:{
            type: DataTypes.DATE,
        },
        Ref_Type:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        ExpiryMonth:{
            type: DataTypes.STRING,
            defaultValue:""
        },
        ExpiryYear:{
            type: DataTypes.STRING,
            defaultValue:""
        }
        
    },{
        freezeTableName: true,
        timestamps: false,
        initialAutoIncrement:1
});


export default Card_Details