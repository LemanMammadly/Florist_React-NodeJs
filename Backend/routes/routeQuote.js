const express=require("express")
const router=express.Router();
const quoteController=require("../controller/quoteController.js")


router.get("/",quoteController.getAllQuote);
router.post("/",quoteController.createQuote);
router.get("/:id",quoteController.getQuote);
router.delete("/:id",quoteController.deleteQuote);


module.exports=router;