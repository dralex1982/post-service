const config = {
    port: process.env.PORT || 3000,
    mongodb: {
        uri: process.env.MONGO_URI || 'mongodb://dra:1234@localhost:27017/java63?authSource=admin',
        db: {
            dbName: process.env.DB_NAME || 'java63'
        }
    }
}

export default config;