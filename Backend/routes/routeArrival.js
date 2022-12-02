const express=require("express")
const router=express.Router();
const arrivalController=require("../controller/arrivalController.js")


router.get("/",arrivalController.getAllArrival);
router.post("/",arrivalController.createArrival)
router.get("/:id",arrivalController.getArrival);
router.put("/:id",arrivalController.updateArrival);
router.delete("/:id",arrivalController.deleteArrival);

module.exports=router;