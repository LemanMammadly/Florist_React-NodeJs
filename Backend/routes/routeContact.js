const express=require("express");
const router=express.Router();
const ContactController=require("../controller/contactController.js");

router.get("/",ContactController.getAllContact);
router.post("/",ContactController.createContact);
router.get("/:id",ContactController.getContact);
router.delete("/:id",ContactController.deleteContact);


module.exports=router;