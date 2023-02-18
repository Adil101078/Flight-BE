require('module-alias/register')
import express from "express";
import cors from "cors";
import { App } from "./core/globals";
import Bootstrap from "./core/bootstrap";
import Routes from "./routes";
import morgan from "morgan";
import Database from "./core/database";
import path from "path";
import clientRouter from "./renderRoute.routes";


const expressApp = express();
expressApp.use(function (req, res, next) {
	res.setHeader(
		'Content-Security-Policy',
		"default-src * self  blob: data: gap://ready; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;"
		)
		next()
	})
expressApp.use(morgan("dev"));
expressApp.use(cors());
expressApp.set('views', path.join(__dirname, 'views'))
expressApp.set('view engine', 'ejs')
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: false }));
expressApp.use(express.static(path.join(__dirname, 'public')))
expressApp.set("port", App.Config.PORT);
expressApp.set("env", "development");
expressApp.disable("x-powered-by");

expressApp.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key')
	if (req.method == 'OPTIONS') {
		res.status(200).end()
	} else {
		next()
	}
})



// Add Routes

// Connect Database
async function _ConnectDatabase() {
     Database.sync()
    .then(()=>{
        Logger.info('Database connected successfully.')
        
    })
    .catch((error)=>Logger.error(error))
   
}

_ConnectDatabase().then(() => {
  Bootstrap().then(() => {
    expressApp.use("/", Routes)
    // expressApp.use('/', clientRouter)
    expressApp.listen(expressApp.get("port"), () => {
      Logger.info(
        `App is running at http://localhost:${App.Config.PORT} in ${App.Config.ENVIRONMENT} mode.`
      );
      Logger.info("Press CTRL-C to stop");
    });
  });
});
