// import express from "express";
// import StudentEvents from "../models/StudentEvents.js";


const Event=require("../models/Event");
const router = require("express").Router();




router.post("/studentevent",require("../middlewares/authOnly"),async(req,res) =>
{
            const firstName = req.auth.user.firstname;
            const lastName = req.auth.user.lastname;
            const eventName = req.body.eventname;
            const CommitteeName= req.body.committeename;
            const date = req.body.date;
            const description = req.body.description;

            if(!description||!CommitteeName||!date||!eventName)
            {
                  res.status(400).send("One or more than one fields are missing");
            }
            const StudentInfo = new Event({
                  firstname:firstName,
                  lastname:lastName,
                  eventname:eventName,
                  committeename:CommitteeName,
                  date:date,
                  description:description,
            });
            await StudentInfo.save();
            res.send(StudentInfo);



})


module.exports=router;
