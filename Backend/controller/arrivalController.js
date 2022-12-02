const Arrival=require("../model/arrivalsSchema.js")


const getAllArrival=async(req,res,next)=>{
    let arrivals;
    try {
        arrivals=await Arrival.find();
    } catch (error) {
        console.log(error);
    }
    if(!arrivals){
        return res.status(404).json({message:"No arrivals found"})
    }
    else{
        return res.status(200).json({arrivals})
    }
}

const getArrival=async(req,res,next)=>{
    let arrival;
    const id=req.params.id;
    try {
        arrival= await Arrival.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!arrival){
        return res.status(404).json({message:"No arrival found"})
    }
    else{
        return res.status(200).json({arrival})
    }
}

const createArrival=async(req,res,next)=>{
    let arrival;
    const {status,image,title,price}=req.body;
    try {
        arrival=new Arrival({
            status,
            image,
            title,
            price
        })
        await arrival.save();
    } catch (error) {
        console.log(error);
    }
    if(!arrival){
        return res.status(500).json({message:"No arrival add"})
    }
    else{
        return res.status(201).json({arrival})
    }
}


const updateArrival=async(req,res,next)=>{
    let arrival;
    const id=req.params.id;
    const {status,image,title,price}=req.body;
    try {
        arrival=await Arrival.findByIdAndUpdate(id,{
            status,
            image,
            title,
            price
        })
        arrival=await arrival.save();
    } catch (error) {
        console.log(error);
    }
    if(!arrival){
        return res.status(404).json({message:"No arrival updated"})
    }
    else{
        return res.status(200).json({arrival})
    }
}


const deleteArrival=async(req,res,next)=>{
    let arrival;
    const id=req.params.id;
    try {
        arrival=await Arrival.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!arrival){
        return res.status(404).json({message:"No delete arrival"})
    }
    else{
        return res.status(200).json({arrival})
    }
}


exports.getAllArrival=getAllArrival;
exports.getArrival=getArrival;
exports.createArrival=createArrival;
exports.updateArrival=updateArrival;
exports.deleteArrival=deleteArrival;