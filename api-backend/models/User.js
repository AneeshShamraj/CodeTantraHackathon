// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";


const mongoose=require("mongoose");


const userSchema = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    userType:{type:String,required:true},
});

// userSchema.methods.generateAuthToken = function(){
//     const token = jwt.sign({_id:this.id},process.env.JWTPRIVATEKEY,{expiresIn:'7d'});
//     return token
// }

module.exports= mongoose.model("User",userSchema);

// const validate = (data) => {
//     const schema = Joi.object({
//       firstName:Joi.string().required().label("firstName"),
//       lastName:Joi.string().required().label("LastName"),
//       email:Joi.string().email().required().label("Email"),
//       password:passwordComplexity().required().label("Password")
//     });
//     return schema.validate(data)
// };

