const router = require("express").Router();
let Loaction = require("../models/location");

router.route("/addLocation").post((req,res) => {

    const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.phone;
    const device = req.body.device;
    
    const newLocation = new Loaction({
        
        name,
        address,
        phone,
        device
        
    })

    newLocation.save().then(()=>{
        res.json("Location Added")
    }).catch((err) => {
        console.log(err);
    })

})

router.route("/updateLocation/:name").put(async(req,res)=>{
    let userId = req.params.name;
    const {name, address, phone,device} = req.body;

    const updateLocation = {
        name, 
        address, 
        phone,
        device
    }

    const update = await Loaction.findOneAndUpdate(userId, updateLocation).then(() => {
        res.status(200).send({status: "Location Updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updation data"});
    })

    
})

router.route("/deleteLocation/:id").delete(async (req,res) =>{
     let userId = req.params.id; 

     await Loaction.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Remove Location"});
     }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with remove Location", error: err.message});
     })
})

router.route("/get/:LocationId").get(async (req,res) => {
    let userId = req.params.LocationId;
    const user =  await Employee.findOne({name: userId}).then((location)=>{
        res.status(200).send({status:"User Fetched", location})
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating data"})
    })
})

router.route("/getLocation").get((req,res) =>{
    Loaction.find().then((location)=>{
        res.json(location)
    }).catch((err) =>{
        console.log(err)
    })
})

module.exports = router;