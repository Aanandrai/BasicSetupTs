import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

let sequelize: Sequelize;


if (process.env.NODE_ENV === "production" && process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
    {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT), // convert string → number
      dialect: "postgres",
      logging: false,
    }
  );
}

export default sequelize;
