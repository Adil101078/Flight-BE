import { DataTypes } from "sequelize";
import Database from "../core/database";
import bcrypt from "bcrypt";

const User = Database.define(
  "User",
  {
    UserFullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    DisplayName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Status: {
      type: DataTypes.STRING,
      defaultValue: "Active",
    },
    UserType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastLogin: {
      type: DataTypes.DATE,
    },
    IPCheck: {
      type: DataTypes.BOOLEAN,
    },
    ModifiedBy: {
      type: DataTypes.STRING,
    },
    ModifiedOn: {
      type: DataTypes.DATE,
    },
    CreatedOn: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    hooks: {
      beforeCreate: async (record, options) => {
        record.dataValues.password = await bcrypt.hash(
          record.dataValues.password,
          12
        );
      },
    },
  }
);

export default User;
