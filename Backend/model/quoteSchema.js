const mongoose=require("mongoose");


const quoteSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    typeservices:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Quote",quoteSchema)
