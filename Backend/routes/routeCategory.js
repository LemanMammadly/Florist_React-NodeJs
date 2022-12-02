const express=require("express");
const router=express.Router();
const CategoryController=require("../controller/categoryController.js");

router.get("/",CategoryController.getAllCategory);
router.post("/",CategoryController.createCategory);
router.get("/:id",CategoryController.getCategory);
router.put("/:id",CategoryController.updateCategory);
router.delete("/:id",CategoryController.deleteCategory);


module.exports=router;