import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
var app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.URI).
   then(console.log("Data Connected")).
   catch(err=>console.log(err));





app.listen(process.env.PORT,()=>console.log(`Server running at ${process.env.PORT}`));