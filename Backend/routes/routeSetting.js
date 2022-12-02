const express=require("express")
const router=express.Router();
const settingController=require("../controller/settingController.js")


router.get("/",settingController.getAllSettings);
router.get("/:id",settingController.getSetting);
router.put("/:id",settingController.updateSetting);


module.exports=router;