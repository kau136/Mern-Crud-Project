const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const userController = require("../controller/controller")


router.get("/",(req,res)=>{
    console.log("connect");
});



router.post("/register",userController.register);




router.get("/getdata",userController.getAllData)

// get individual user

router.get("/getuser/:id",userController.getUserDataById)




router.patch("/updateuser/:id",userController.updateUserById)



router.delete("/deleteuser/:id",userController.deleteUserById)

module.exports = router;










