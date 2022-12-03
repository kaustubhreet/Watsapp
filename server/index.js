import express  from "express";
import Connection from "./database/db.js";
import Route from './routes/Routes.js';
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';



const app=express();

dotenv.config();

const username=process.env.DP_USERNAME;
const password=process.env.DP_PASSWORD;

Connection(username,password);
app.use('/',Route);
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


const PORT=8000;
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))