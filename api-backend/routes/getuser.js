// import express from "express";



const router = require("express").Router();
const Event=require("../models/Event");

router.post("/acceptrequest",require("../middlewares/authOnly"),async(req,res) =>
{
        const objid=req.body.objid;
        const currentevent=await Event.findOne({ _id: objid });
        const currentdate=currentevent.date;
        await Event.deleteMany({ date: currentdate });
        res.json(await Event.updateOne({_id:objid},{approved:true}));


});

router.post("/denyrequest",require("../middlewares/authOnly"),async(req,res) =>
{
        const objid=req.body.objid;
        try{
                res.send(await Event.deleteOne({ _id:objid }));
        }
        catch{
                res.status(400).send("Error");
        }
        

});

router.get("/getpendingrequests",require("../middlewares/authOnly"),async(req,res)=>
{
        var foundrequests=await Event.find({approved:false});
        res.json(foundrequests);
});


module.exports=router;
