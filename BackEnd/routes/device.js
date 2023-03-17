const router = require("express").Router();
let Device = require("../models/device");
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router.route("/addDevice").post(upload.single('image'),(req,res) => {

    const serialNumber = req.body.serialNumber;
    const type = req.body.type;
    const image = req.body.image;
    const status = req.body.status;
    
    const newDevice = new Device({
        
        serialNumber,
        type,
        image,
        status
        
    })

    newDevice.save().then(()=>{
        res.json("Device Added")
    }).catch((err) => {
        console.log(err);
    })

})

router.route("/updateDevice/:name").put(async(req,res)=>{
    let userId = req.params.name;
    const {serialNumber, type, image,status} = req.body;

    const updateDevice = {
        serialNumber, 
        type, 
        image,
        status
    }

    const update = await Device.findOneAndUpdate(userId, updateDevice).then(() => {
        res.status(200).send({status: "Device Updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updation data"});
    })

    
})

router.route("/deletDevice/:id").delete(async (req,res) =>{
     let userId = req.params.id; 

     await Device.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Remove Location"});
     }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with remove Location", error: err.message});
     })
})

router.route("/get/:deviceID").get(async (req,res) => {
    let userId = req.params.deviceID;
    const user =  await Device.findOne({serialNumber: userId}).then((device)=>{
        res.status(200).send({status:"User Fetched", device})
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating data"})
    })
})

router.route("/getDevice").get((req,res) =>{
    Device.find().then((device)=>{
        res.json(device)
    }).catch((err) =>{
        console.log(err)
    })
})

module.exports = router;