const Quote=require("../model/quoteSchema.js")



const getAllQuote=async(req,res,next)=>{
    let quotes;
    try {
        quotes=await Quote.find();
    } catch (error) {
        console.log(error);
    }

    if(!quotes){
        return res.status(404).json({message:"No found quotes!"})
    }
    else{
        return res.status(200).json({quotes})
    }
}


const getQuote=async(req,res,next)=>{
    let quote;
    const id=req.params.id;
    try {
        quote=await Quote.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!quote){
        return res.status(404).json({message:"No quote found"})
    }
    else{
        return res.status(200).json({quote})
    }
}


const createQuote=async(req,res,next)=>{
    let quote;
    const {name,phone,email,typeservices,message}=req.body;
    try {
        quote=new Quote({
            name,
            phone,
            email,
            typeservices,
            message
        })
        await quote.save();
    } catch (error) {
        console.log(error);
    }
    if(!quote){
        return res.status(500).json({message:"No quote found"})
    }
    else{
        return res.status(201).json({quote})
    }
}


const deleteQuote=async(req,res,next)=>{
    let quote;
    const id=req.params.id;
    try {
        quote= await Quote.findOneAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!quote){
        return res.status(404).json({message:"No delete quote"})
    }
    else{
        return res.status(200).json({quote})
    }
}


exports.getAllQuote=getAllQuote;
exports.getQuote=getQuote;
exports.createQuote=createQuote;
exports.deleteQuote=deleteQuote;