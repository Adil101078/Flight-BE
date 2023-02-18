import { App } from "./globals";
import { Sequelize } from "sequelize";

const Database = new Sequelize(
    App.Config.DATABASE_NAME,
    App.Config.DB_USERNAME,
    App.Config.DB_PASSWORD,
    App.Config.DB_CONNECTION_OPTIONS
)
export default Database
