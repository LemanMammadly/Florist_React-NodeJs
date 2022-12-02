const express=require("express");
const router=express.Router();
const ExpertController=require("../controller/expertController.js");

router.get("/",ExpertController.getAllExpert);
router.post("/",ExpertController.createExpert);
router.get("/:id",ExpertController.getExpert);
router.put("/:id",ExpertController.updateExpert);
router.delete("/:id",ExpertController.deleteExpert);

module.exports=router;