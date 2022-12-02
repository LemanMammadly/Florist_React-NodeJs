const Slider=require("../model/sliderSchema.js")


const getAllSlider=async(req,res,next)=>{
    let sliders;
    try {
        sliders=await Slider.find()
    } catch (error) {
        console.log(error);
    }
    if(!sliders){
        return res.status(400).json({message:"No sliders found"})
    }
    else{
        return res.status(200).json({sliders})
    }
}


const getSlider=async(req,res,next)=>{
    const id=req.params.id;
    let slider;
    try {
        slider=await Slider.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!slider){
        return res.status(404).json({message:"No slider found"})
    }
    else{
        return res.status(200).json({slider})
    }
}


const createSlider=async(req,res,next)=>{
    const {title,description,image}=req.body;
    let slider;
    try {
        slider=new Slider({
            title,
            description,
            image
        })
        await slider.save();
    } catch (error) {
        console.log(error);
    }
    if(!slider){
        return res.status(500).json({message:"No create slider"})
    }
    else{
        return res.status(201).json({slider})
    }
}


const updateSlider=async(req,res,next)=>{
    const {title,description,image}=req.body;
    const id=req.params.id;
    let slider;
    try {
        slider=await Slider.findByIdAndUpdate(id,{
            title,
            description,
            image
        })
        slider=await slider.save()
    } catch (error) {
        console.log(error);
    }
    if(!slider){
        return res.status(404).json({message:"No slider update!"})
    }
    else{
        return res.status(200).json({slider})
    }
}

const deleteSlider=async(req,res,next)=>{
    const id=req.params.id;
    let slider;
    try {
        slider=await Slider.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!slider){
        return res.status(404).json({message:"No delete slider"})
    }
    else{
        return res.status(200).json({slider})
    }
}

exports.getAllSlider=getAllSlider;
exports.getSlider=getSlider;
exports.createSlider=createSlider;
exports.updateSlider=updateSlider;
exports.deleteSlider=deleteSlider;