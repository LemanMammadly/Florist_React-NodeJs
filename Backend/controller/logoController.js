const Logo=require("../model/logoSchema.js")


const getAllLogo=async(req,res,next)=>{
    let logos;
    try {
        logos=await Logo.find();
    } catch (error) {
        console.log(error);
    }

    if(!logos){
        return res.status(404).json({message:"No found logos!"})
    }
    else{
        return res.status(200).json({logos})
    }
}


const getLogo=async(req,res,next)=>{
    let logo;
    const id=req.params.id;
    try {
        logo=await Logo.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!logo){
        return res.status(404).json({message:"No logo found"})
    }
    else{
        return res.status(200).json({logo})
    }
}



const updateLogo=async(req,res,next)=>{
    const id=req.params.id;
    const {image}=req.body;
    let logo;
    try {
        logo= await Logo.findByIdAndUpdate(id,{
            image
        })
        logo=await logo.save();
    } catch (error) {
        console.log(error);
    }
    if(!logo){
        return res.status(404).json({message:"No logo found"})
    }
    else{
        return res.status(200).json({logo})
    }
}



exports.getAllLogo=getAllLogo;
exports.getLogo=getLogo;
exports.updateLogo=updateLogo;