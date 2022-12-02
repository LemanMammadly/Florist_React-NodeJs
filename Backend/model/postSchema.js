const mongoose=require("mongoose");


const postSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})

module.exports=mongoose.model("Post",postSchema)
