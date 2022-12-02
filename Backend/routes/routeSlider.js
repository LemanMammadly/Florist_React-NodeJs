const express=require("express");
const router=express.Router();
const sliderController=require("../controller/sliderController.js")


router.get("/",sliderController.getAllSlider);
router.post("/",sliderController.createSlider);
router.get("/:id",sliderController.getSlider);
router.put("/:id",sliderController.updateSlider);
router.delete("/:id",sliderController.deleteSlider);

module.exports=router;