import React, {useState,useEffect} from "react";
import axios from "axios";

export default function AddLocation(){

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [devices, setDevices] = useState([]);

    function sendData(e){
        
        const newLocation = {
            name,
            address,
            phone,
            devices
        }
        console.log(newLocation)
        axios.post("http://localhost:8099/location/addLocation",newLocation).then(() => {
            alert("Add New Location");
            e.preventDefault();
        }).catch((err) => {
            alert(err);
        })

       

    }
    

        useEffect(()=>{
        function getDevices(){
        axios.get("http://localhost:8099/location/getLocation").then((res)=>{
            setDevices(res.data);
            console.log(res.data)
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getDevices();
    },[devices])

    return (
        <div style={{backgroundSize:"container"}}><br></br>
        <div className="form-style-5" > 
        <form onSubmit={sendData}>
            <div > 
            <center><h1>Add New Location</h1></center>
            <br></br><br></br>
            <div></div>
                 </div>

            <div className="container">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Location Name " onChange={(e)=>{
                    setName(e.target.value);
                }}/>
            </div>

            <div className="container">
                <label for="address">Address</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter the Address" onChange={(e)=>{
                    setAddress(e.target.value);
                }}/>
                
            </div>

            <div className="container">
                <label for="phone">Phone Number</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter the phone number" onChange={(e)=>{
                    setPhone(e.target.value);
                }}/>
                
            </div>

            {
                devices.map(device => (
                    <div>
                        <label for="device">Device</label>
                        <h1>{device.serialNumber}</h1>
                        <input type="checkbox" className="form-control" value={device.serialNumber} id="exampleInputPassword1" onChange={(e)=>{
                            setDevices(e.target.value);
                        }}/>
                    </div>
                ))
            }

            <center><button type="submit" className="btn btn-primary" >Add Location</button></center>
            </form><br></br>
            </div><br></br></div>
    )

}