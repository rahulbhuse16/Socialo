import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import AuthRoute from './Routes/Auth_Route.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from "./Routes/PostRoute.js"
import UploadRoute from './Routes/UploadRoute.js'
import ChatRoute from './Routes/ChatRoute.js'
import MessageRoute from './Routes/MessageRoute.js'
import cors from "cors";

const app=express();
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());

app.use(express.static('public')); 
app.use('/images', express.static('images'));





dotenv.config();


mongoose
  .connect('mongodb://localhost:27017/mydb')
  .then(() => app.listen(2000, () => console.log(`Listening at Port`)))
 
  app.use('/auth', AuthRoute);
app.use('/user',UserRoute);
app.use('/posts',PostRoute);
app.use('/upload', UploadRoute)
app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)


