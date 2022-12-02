const Category=require("../model/categorySchema.js")



const getAllCategory=async(req,res,next)=>{
    let categories;
    try {
        categories=await Category.find();
    } catch (error) {
        console.log(error);
    }

    if(!categories){
        return res.status(404).json({message:"No found categories!"})
    }
    else{
        return res.status(200).json({categories})
    }
}


const getCategory=async(req,res,next)=>{
    let category;
    const id=req.params.id;
    try {
        category=await Category.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!category){
        return res.status(404).json({message:"No category found"})
    }
    else{
        return res.status(200).json({category})
    }
}


const createCategory=async(req,res,next)=>{
    let category;
    const {image,title,count}=req.body;
    try {
        category=new Category({
            image,
            title,
            count
        })
        await category.save();
    } catch (error) {
        console.log(error);
    }
    if(!category){
        return res.status(500).json({message:"No category found"})
    }
    else{
        return res.status(201).json({category})
    }
}


const updateCategory=async(req,res,next)=>{
    const id=req.params.id;
    const {image,title,count}=req.body;
    let category;
    try {
        category= await Category.findByIdAndUpdate(id,{
            image,
            title,
            count
        })
        category=await category.save();
    } catch (error) {
        console.log(error);
    }
    if(!category){
        return res.status(404).json({message:"No category found"})
    }
    else{
        return res.status(200).json({category})
    }
}


const deleteCategory=async(req,res,next)=>{
    let category;
    const id=req.params.id;
    try {
        category= await Category.findOneAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!category){
        return res.status(404).json({message:"No delete category"})
    }
    else{
        return res.status(200).json({category})
    }
}


exports.getAllCategory=getAllCategory;
exports.getCategory=getCategory;
exports.createCategory=createCategory;
exports.updateCategory=updateCategory;
exports.deleteCategory=deleteCategory;