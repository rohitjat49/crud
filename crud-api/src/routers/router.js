const express = require("express");
const router = express.Router();
const UsersRegister = require("../models/regiter")

// register route
router.post("/register", async(req, res)=>{
    // console.log(req.body);
    const {name,email,age,number,work,add,desc}  = req.body ;

    if(!name || !email || !age || !number || !work || !add || !desc){
        res.status(422).json("fill the data");
    }try{
        const preuser = await UsersRegister.findOne({email:email});
        console.log(preuser);
        if(preuser){
            res.status(422).json("this is user is already present")
        }else{
            const adduser = new UsersRegister({
                name,email,age,number,work,add,desc
            })

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    }catch (error) {
        res.status(422).json(error)

    }
 })

 //get userdata

 router.get("/getdata", async (req, res ) => {
    try {
        const userdata = await UsersRegister.find();
        res.status(201).json(userdata)
        console.log(userdata)

    }catch (error){
        res.status(422).json(error);

    }
 })

 //get user details

 router.get("/getuser/:id" , async (req, res) =>{
    try{
        console.log(req.params);
        const {id} = req.params;
        
        const userdetails = await  UsersRegister.findById({_id:id});
        console.log(userdetails)
        res.status(201).json(userdetails);

    }catch (error){
        res.status(422).json(error);
    }
 })

 //update user edit update

 router.patch("/updateuser/:id", async (req,res) =>{
    try{
        const {id} = req.params;

        const updateuser = await UsersRegister.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updateuser);
        res.status(201).json(updateuser);

    } catch (error){
        res.status(422).json(error);
    }
 })

 //dELETE user

 router.delete("/deleteuser/:id", async(req, res)=>{
    try{
        const {id} = req.params;

        const deleteuser = await UsersRegister.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteuser);

    } catch (error){
        res.status(422).json(error);
    }
 })

 module.exports = router;