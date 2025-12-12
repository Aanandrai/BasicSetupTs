"use strict";
// import { DataTypes, Model, Optional } from "sequelize";
// import sequelize from "../db/sequelize";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // Define the attributes
// interface UserAttributes {
//   id: number;
//   name: string;
//   email: string;
//   createdAt?: Date;
//   updatedAt?: Date;
// }
// // Some fields are optional when creating a new user
// interface UserCreationAttributes extends Optional<UserAttributes, "id" | "createdAt" | "updatedAt"> {}
// // Define the model
// class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
//   public id!: number;
//   public name!: string;
//   public email!: string;
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }
// // Initialize the model
// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true,
//       },
//     },
//   },
//   {
//     sequelize,
//     tableName: "users",
//     timestamps: true,
//   }
// );
// export default User;
// src/db/models/user.model.ts
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../db/sequelize")); // Assuming sequelize is exported from here
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: sequelize_2.default,
    modelName: 'User',
    tableName: 'Users',
    timestamps: true, // Optional: adds createdAt & updatedAt fields
});
exports.default = User;
//# sourceMappingURL=user.model.js.map