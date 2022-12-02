const mongoose=require("mongoose")


const expertSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Expert",expertSchema)