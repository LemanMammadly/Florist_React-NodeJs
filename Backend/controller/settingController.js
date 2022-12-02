const Setting=require("../model/settingSchema.js")

const getAllSettings=async(req,res,next)=>{
    let settings;
    try {
        settings=await Setting.find();
    } catch (error) {
        console.log(error);
    }

    if(!settings){
        return res.status(404).json({message:"No found settings!"})
    }
    else{
        return res.status(200).json({settings})
    }
}


const getSetting=async(req,res,next)=>{
    let setting;
    const id=req.params.id;
    try {
        setting=await Setting.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!setting){
        return res.status(404).json({message:"No setting found"})
    }
    else{
        return res.status(200).json({setting})
    }
}



const updateSetting=async(req,res,next)=>{
    const id=req.params.id;
    const {icon1,icon2,icon3,icon4,address,phone1,phone2,email}=req.body;
    let setting;
    try {
        setting= await Setting.findByIdAndUpdate(id,{
            icon1,
            icon2,
            icon3,
            icon4,
            address,
            phone1,
            phone2,
            email
        })
        setting=await setting.save();
    } catch (error) {
        console.log(error);
    }
    if(!setting){
        return res.status(404).json({message:"No setting found"})
    }
    else{
        return res.status(200).json({setting})
    }
}



exports.getAllSettings=getAllSettings;
exports.getSetting=getSetting;
exports.updateSetting=updateSetting;