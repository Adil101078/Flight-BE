import { DataType, DataTypes } from "sequelize"
import Database from "../core/database"

const Referance_Creator = Database.define("Referance_Creator",{
    Ref_Prefix:{
        type: DataTypes.STRING,
        primaryKey:true
    },
    Ref_Suffix:{
        type: DataTypes.BIGINT,
    },
    Ref_Description:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
})

export default Referance_Creator