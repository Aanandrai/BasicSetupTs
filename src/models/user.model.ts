// import { DataTypes, Model, Optional } from "sequelize";
// import sequelize from "../db/sequelize";

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
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';  // Assuming sequelize is exported from here

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber:{
      type: DataTypes.STRING,  // Use Sequelize.STRING for the column type
      allowNull: true, 
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: true,  // Optional: adds createdAt & updatedAt fields
  }
);

export default User;

