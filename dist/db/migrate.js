"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createDb_1 = __importDefault(require("./createDb"));
const sequelize_1 = __importDefault(require("./sequelize"));
const umzug_1 = require("umzug");
const runMigrations = async () => {
    // Ensure DB exists
    await (0, createDb_1.default)();
    const umzug = new umzug_1.Umzug({
        migrations: { glob: "src/migrations/*.ts" }, // use .ts for TypeScript
        context: sequelize_1.default.getQueryInterface(),
        storage: new umzug_1.SequelizeStorage({ sequelize: sequelize_1.default }),
        logger: console,
    });
    try {
        await umzug.up();
        console.log("Migrations complete!");
        process.exit(0);
    }
    catch (err) {
        console.error("Migration error:", err);
        process.exit(1);
    }
};
runMigrations();
//# sourceMappingURL=migrate.js.map