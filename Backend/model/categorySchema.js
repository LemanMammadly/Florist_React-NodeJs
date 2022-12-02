const mongoose=require("mongoose")


const categorySchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    count:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Category",categorySchema)