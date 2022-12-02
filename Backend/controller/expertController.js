const Expert=require("../model/expertSchema.js")



const getAllExpert=async(req,res,next)=>{
    let experts;
    try {
        experts=await Expert.find();
    } catch (error) {
        console.log(error);
    }

    if(!experts){
        return res.status(404).json({message:"No found experts!"})
    }
    else{
        return res.status(200).json({experts})
    }
}


const getExpert=async(req,res,next)=>{
    let expert;
    const id=req.params.id;
    try {
        expert=await Expert.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!expert){
        return res.status(404).json({message:"No expert found"})
    }
    else{
        return res.status(200).json({expert})
    }
}


const createExpert=async(req,res,next)=>{
    let expert;
    const {image,name,position}=req.body;
    try {
        expert=new Expert({
            image,
            name,
            position
        })
        await expert.save();
    } catch (error) {
        console.log(error);
    }
    if(!expert){
        return res.status(500).json({message:"No expert found"})
    }
    else{
        return res.status(201).json({expert})
    }
}


const updateExpert=async(req,res,next)=>{
    const id=req.params.id;
    const {image,name,position}=req.body;
    let expert;
    try {
        expert= await Expert.findByIdAndUpdate(id,{
            image,
            name,
            position
        })
        expert=await expert.save();
    } catch (error) {
        console.log(error);
    }
    if(!expert){
        return res.status(404).json({message:"No expert found"})
    }
    else{
        return res.status(200).json({expert})
    }
}


const deleteExpert=async(req,res,next)=>{
    let expert;
    const id=req.params.id;
    try {
        expert= await Expert.findOneAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!expert){
        return res.status(404).json({message:"No delete expert"})
    }
    else{
        return res.status(200).json({expert})
    }
}


exports.getAllExpert=getAllExpert;
exports.getExpert=getExpert;
exports.createExpert=createExpert;
exports.updateExpert=updateExpert;
exports.deleteExpert=deleteExpert;