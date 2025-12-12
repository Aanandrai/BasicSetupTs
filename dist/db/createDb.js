"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createDbIfNotExist = async () => {
    const dbName = process.env.DB_NAME;
    if (!dbName) {
        throw new Error("DB_NAME environment variable is not set");
    }
    // Connect to default 'postgres' database
    const client = new pg_1.Client({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT), // convert string -> number
        database: "postgres", // must connect to a database that exists
    });
    try {
        await client.connect();
        const res = await client.query(`SELECT 1 FROM pg_database WHERE datname=$1`, [dbName]);
        if (res.rowCount === 0) {
            console.log(`Database "${dbName}" does not exist. Creating...`);
            await client.query(`CREATE DATABASE "${dbName}"`);
            console.log(`Database "${dbName}" created successfully!`);
        }
        else {
            console.log(`Database "${dbName}" already exists.`);
        }
    }
    catch (err) {
        console.error("Error creating database:", err);
    }
    finally {
        await client.end();
    }
};
exports.default = createDbIfNotExist;
//# sourceMappingURL=createDb.js.map