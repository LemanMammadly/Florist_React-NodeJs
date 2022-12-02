const mongoose=require("mongoose")


const settingSchema=new mongoose.Schema({
    icon1:{
        type:String,
        required:true
    },
    icon2:{
        type:String,
        required:true
    },
    icon3:{
        type:String,
        required:true
    },
    icon4:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone1:{
        type:Number,
        required:true
    },
    phone2:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    }
})


module.exports=mongoose.model("Setting",settingSchema)