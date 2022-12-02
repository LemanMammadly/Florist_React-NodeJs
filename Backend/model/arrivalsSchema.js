const mongoose=require("mongoose");


const arrivalSchema=new mongoose.Schema({
    status:{
        type:String,
    },
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model("Arrival",arrivalSchema);