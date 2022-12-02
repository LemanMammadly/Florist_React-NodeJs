const Instagram=require("../model/instagramSchema.js")


const getAllInstagram=async(req,res,next)=>{
    let instagrams;
    try {
        instagrams=await Instagram.find();
    } catch (error) {
        console.log(error);
    }

    if(!instagrams){
        return res.status(404).json({message:"No found instagrams!"})
    }
    else{
        return res.status(200).json({instagrams})
    }
}


const getInstagram=async(req,res,next)=>{
    let instagram;
    const id=req.params.id;
    try {
        instagram=await Instagram.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!instagram){
        return res.status(404).json({message:"No instagram found"})
    }
    else{
        return res.status(200).json({instagram})
    }
}


const createInstagram=async(req,res,next)=>{
    let instagram;
    const {image,profileName}=req.body;
    try {
        instagram=new Instagram({
            image,
            profileName
        })
        await instagram.save();
    } catch (error) {
        console.log(error);
    }
    if(!instagram){
        return res.status(500).json({message:"No instagram found"})
    }
    else{
        return res.status(201).json({instagram})
    }
}


const updateInstagram=async(req,res,next)=>{
    const id=req.params.id;
    const {image,profileName}=req.body;
    let instagram;
    try {
        instagram= await Instagram.findByIdAndUpdate(id,{
            image,
            profileName
        })
        instagram=await instagram.save();
    } catch (error) {
        console.log(error);
    }
    if(!instagram){
        return res.status(404).json({message:"No instagram found"})
    }
    else{
        return res.status(200).json({instagram})
    }
}


const deleteInstagram=async(req,res,next)=>{
    let instagram;
    const id=req.params.id;
    try {
        instagram= await Instagram.findOneAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!instagram){
        return res.status(404).json({message:"No delete instagram"})
    }
    else{
        return res.status(200).json({instagram})
    }
}


exports.getAllInstagram=getAllInstagram;
exports.getInstagram=getInstagram;
exports.createInstagram=createInstagram;
exports.updateInstagram=updateInstagram;
exports.deleteInstagram=deleteInstagram;