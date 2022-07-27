// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import Connection from "./db.js";
// import User from "./routes/user.js";
// import authRoutes from "./routes/auth.js";
// import getusers from "./routes/getuser.js";
// import student from "./routes/student.js";

const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const mongoose=require("mongoose");


//mongodb+srv://admin:admin@cluster0.lb5fb.mongodb.net/projectDb

mongoose.connect("mongodb://localhost:27017/testbackend",()=>{
    console.log("Connected to Database");
});




dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ exposedHeaders: "token" }));

app.use(require("./middlewares/auth"));
// app.use(authMiddleware);

app.use("/api/auth",require("./routes/auth"));
app.use("/api/getuser",require("./routes/getuser"));
app.use("/api/student",require("./routes/student"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Listening to the port 8080."));
