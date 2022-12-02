const express=require("express")
const router=express.Router();
const instagramController=require("../controller/instagramController.js")


router.get("/",instagramController.getAllInstagram);
router.post("/",instagramController.createInstagram);
router.get("/:id",instagramController.getInstagram);
router.put("/:id",instagramController.updateInstagram);
router.delete("/:id",instagramController.deleteInstagram);


module.exports=router;