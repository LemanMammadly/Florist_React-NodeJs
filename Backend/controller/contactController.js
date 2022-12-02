const Contact=require("../model/contactSchema.js")



const getAllContact=async(req,res,next)=>{
    let contacts;
    try {
        contacts=await Contact.find();
    } catch (error) {
        console.log(error);
    }

    if(!contacts){
        return res.status(404).json({message:"No found contacts!"})
    }
    else{
        return res.status(200).json({contacts})
    }
}


const getContact=async(req,res,next)=>{
    let contact;
    const id=req.params.id;
    try {
        contact=await Contact.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!contact){
        return res.status(404).json({message:"No contact found"})
    }
    else{
        return res.status(200).json({contact})
    }
}


const createContact=async(req,res,next)=>{
    let contact;
    const {email,message}=req.body;
    try {
        contact=new Expert({
            email,
            message
        })
        await contact.save();
    } catch (error) {
        console.log(error);
    }
    if(!contact){
        return res.status(500).json({message:"No contact found"})
    }
    else{
        return res.status(201).json({contact})
    }
}

const deleteContact=async(req,res,next)=>{
    let contact;
    const id=req.params.id;
    try {
        contact= await Contact.findOneAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!contact){
        return res.status(404).json({message:"No delete contact"})
    }
    else{
        return res.status(200).json({contact})
    }
}


exports.getAllContact=getAllContact;
exports.getContact=getContact;
exports.createContact=createContact;
exports.deleteContact=deleteContact;