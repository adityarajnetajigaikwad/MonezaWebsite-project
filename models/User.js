import { DataTypes } from "sequelize";

import sequelize from "@/lib/mysql";

const User = sequelize.define("User", {

  name: {

    type: DataTypes.STRING,

    allowNull: false,

  },

  email: {

    type: DataTypes.STRING,

    allowNull: false,

    unique: true,

  },

  password: {

    type: DataTypes.STRING,

    allowNull: false,

  },

  otp: {

    type: DataTypes.STRING,

  },

  otpExpiry: {

    type: DataTypes.DATE,

  },

  isVerified: {

    type: DataTypes.BOOLEAN,

    defaultValue: false,

  },

});

export default User;