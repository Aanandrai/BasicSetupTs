import dotenv from "dotenv";
import app from "./app";
import sequelize from "./db/sequelize";
import pool from "./db/dbConnection";

dotenv.config();

const startServer = async (): Promise<void> => {
  try {
    console.log("---------DB Connection Start-----------------");

    await sequelize.authenticate();
    console.log("Sequelize connected");

    await sequelize.sync({force: true, alter: true });  //make it force:false in production 
    console.log("Models synced");

    const result = await pool.query("SELECT NOW()");
    console.log("Pool connected at:", result.rows[0].now);

    console.log("---------DB Connected-----------------");

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Unable to start server:", err);
  }
};

startServer();
