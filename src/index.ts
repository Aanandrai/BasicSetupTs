import dotenv from "dotenv";
import app from "./app";
import sequelize from "./db/sequelize";
import pool from "./db/dbConnection";
import createDbIfNotExist from "./db/createDb";

// Import models so they are registered with Sequelize before sync
import "./models/user.model";

dotenv.config();

const startServer = async (): Promise<void> => {
  try {
    console.log("---------DB Connection Start-----------------");

    // Ensure the database exists before attempting to authenticate
    await createDbIfNotExist();

    await sequelize.authenticate();
    console.log("Sequelize connected");

    // Sync models (create tables if they don't exist). Use force:false to avoid dropping data.
    await sequelize.sync({ force: false, alter: true });
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
