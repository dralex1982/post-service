import express from 'express'
import mongoose from "mongoose";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import config from "./configuration/config.js";
import errorHandler from "./middlewares/error.middleware.js";
import authentication from "./middlewares/authentication.middleware.js";
import {createAdmin} from "./configuration/initAdmin.js";
import authorizationRoutes from "./routes/authorization.routes.js";
import dns from 'node:dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = express();

app.use(express.json());
app.use(authentication)

app.use(authorizationRoutes)

app.use('/forum',postRoutes)
app.use('/account',userRoutes)

app.use(errorHandler);

//const port = process.env.PORT || 3000;

app.use((req, res) => {
    res.status(404).type('text/plain; charset=utf-8').send('Not Found');
})

const connectDB = async () => {
    try{
        await mongoose.connect(config.mongodb.uri, config.mongodb.db);
        await createAdmin();
        console.log("Connected to MongoDB...");

    } catch (error) {
        console.log('Failed connection to MongoDB', error)
    }
}
async function startServer() {
    await connectDB();
    app.listen(config.port, () => {
        console.log(`Listening on port ${config.port}. Press Ctrl+C to stop.`);
    })
}

startServer();