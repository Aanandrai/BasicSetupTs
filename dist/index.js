"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const sequelize_1 = __importDefault(require("./db/sequelize"));
const dbConnection_1 = __importDefault(require("./db/dbConnection"));
dotenv_1.default.config();
const startServer = async () => {
    try {
        console.log("---------DB Connection Start-----------------");
        await sequelize_1.default.authenticate();
        console.log("Sequelize connected");
        await sequelize_1.default.sync({ force: true, alter: true }); //make it force:false in production 
        console.log("Models synced");
        const result = await dbConnection_1.default.query("SELECT NOW()");
        console.log("Pool connected at:", result.rows[0].now);
        console.log("---------DB Connected-----------------");
        const port = process.env.PORT || 3000;
        app_1.default.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
    catch (err) {
        console.error("Unable to start server:", err);
    }
};
startServer();
//# sourceMappingURL=index.js.map