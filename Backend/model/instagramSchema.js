const mongoose=require("mongoose")

const instagramSchema=mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    profileName:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Instagram",instagramSchema)