import createDbIfNotExist from "./createDb";
import sequelize from "./sequelize";
import { Umzug, SequelizeStorage } from "umzug";
import User from "../models/user.model"

const runMigrations = async (): Promise<void> => {
  // Ensure DB exists
  await createDbIfNotExist();

  const umzug = new Umzug({
    migrations: { glob: "src/migrations/*.ts" }, // use .ts for TypeScript
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
  });

  try {
    await umzug.up();
    console.log("Migrations complete!");
    process.exit(0);
  } catch (err) {
    console.error("Migration error:", err);
    process.exit(1);
  }
};

runMigrations();
