export default () => ({
    PORT: parseInt(process.env.DEV_PORT, 10),
    ENVIRONMENT: "development",

    DATABASE_NAME: process.env.DEV_DB_CONNECTION_STRING,
    DB_USERAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_CONNECTION_OPTIONS: {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialectOptions:{
            instancename: process.env.DB_INSTANCE_NAME,
            options: {
                useUTC: false,
                dateFirst: 1
              }
        }
    },
    UTM_CONTACT_US: process.env.UTM_SOURCE,
    CONTACT_US: process.env.CONTACT_US,
    COMPANY_ID: process.env.COMPANY_ID,
    CREDENTIAL_ID: process.env.CREDENTIAL_ID,
    CREDENTIAL_PASSWORD: process.env.CREDENTIAL_PASSWORD,
    CREDENTIAL_TYPE: process.env.CREDENTIAL_TYPE,
    DEPARTURE_TIME: process.env.DEPARTURE_TIME,
    DEPARTURE_TO: process.env.DEPARTURE_TO,
    COOKIE_MAX_AGE: process.env.COOKIE_MAX_AGE,
    SESSION_SECRET: process.env.SESSION_SECRET,
    GET_LOW_FARE_ENDPOINT: process.env.GET_LOW_FARE_ENDPOINT
});
  