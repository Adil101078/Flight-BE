import { App } from "./globals";
import { Sequelize } from "sequelize";

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options)
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
  };
const Database = new Sequelize(
    App.Config.DATABASE_NAME,
    App.Config.DB_USERNAME,
    App.Config.DB_PASSWORD,
    App.Config.DB_CONNECTION_OPTIONS
)
export default Database
