const Post=require("../model/postSchema.js")



const getAllPost=async(req,res,next)=>{
    let posts;
    try {
        posts=await Post.find();
    } catch (error) {
        console.log(error);
    }

    if(!posts){
        return res.status(404).json({message:"No found posts!"})
    }
    else{
        return res.status(200).json({posts})
    }
}


const getPost=async(req,res,next)=>{
    let post;
    const id=req.params.id;
    try {
        post=await Post.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!post){
        return res.status(404).json({message:"No post found"})
    }
    else{
        return res.status(200).json({post})
    }
}


const createPost=async(req,res,next)=>{
    let post;
    const {image,type,title,desc,date}=req.body;
    try {
        post=new Post({
            image,
            type,
            title,
            desc,
            date
        })
        await post.save();
    } catch (error) {
        console.log(error);
    }
    if(!post){
        return res.status(500).json({message:"No post found"})
    }
    else{
        return res.status(201).json({post})
    }
}


const updatePost=async(req,res,next)=>{
    const id=req.params.id;
    const {image,type,title,desc,date}=req.body;
    let post;
    try {
        post= await Post.findByIdAndUpdate(id,{
            image,
            type,
            title,
            desc,
            date
        })
        post=await post.save();
    } catch (error) {
        console.log(error);
    }
    if(!post){
        return res.status(404).json({message:"No post found"})
    }
    else{
        return res.status(200).json({post})
    }
}


const deletePost=async(req,res,next)=>{
    let post;
    const id=req.params.id;
    try {
        post= await Post.findOneAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!post){
        return res.status(404).json({message:"No delete post"})
    }
    else{
        return res.status(200).json({post})
    }
}


exports.getAllPost=getAllPost;
exports.getPost=getPost;
exports.createPost=createPost;
exports.updatePost=updatePost;
exports.deletePost=deletePost;