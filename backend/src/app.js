import express from 'express';
import { createServer } from 'node:http';
import {Server} from 'socket.io';
import mongoose from 'mongoose';
import {connectToSocket} from './controllers/socketManager.js';

import cors from 'cors';
import userRoutes from './Routes/users.routes.js';

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port" ,(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit : "40kb",extended : true}));

app.use("/api/v1/users" , userRoutes);


const start = async()=>{
    app.set("mongo_user");
    const connectionDB = await mongoose.connect("mongodb+srv://bhumikamourya275:bhumiZoom@zoom-clone.aik3ppr.mongodb.net/?retryWrites=true&w=majority&appName=Zoom-Clone");
    console.log(`mongo connected db host : ${connectionDB.connection.host}`);
    server.listen(app.get("port"),()=>{
        console.log("listening on port :8000 server started");
    });
}
start();