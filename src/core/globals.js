import path from "path";
import _ from "lodash";
import Config from "./config";
import { Logger } from "./logger";

// Database Models

// Export Global Variables
export const Globals = global;
Globals._ = _;
Globals.Logger = Logger;
export const App = {
  EXTENSION_ECOSYSTEM: path.extname(__filename) === ".js" ? "js" : "ts",
  Http: {
    app: null,
  },
  Config: Config(),
  Models: {
  },
};
