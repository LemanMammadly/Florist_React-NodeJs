const express=require("express");
const router=express.Router();
const logoCotroller=require("../controller/logoController.js")

router.get("/",logoCotroller.getAllLogo);
router.get("/:id",logoCotroller.getLogo);
router.put("/:id",logoCotroller.updateLogo);


module.exports=router;