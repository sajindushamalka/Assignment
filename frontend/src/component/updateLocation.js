import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function UpdateLocation() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [devices, setDevices] = useState([]);
    
    const {id} = useParams();
    
    const getLocation = () => {
        axios.get("http://localhost:8099/location/get/"+id)
        .then((res) => {
            const updateLocation = {
                name: res.data.name,
                address: res.data.address,
                phone: res.data.phone,
                devices: res.data.devices
            }

            // console.log(res.data);
            setName(updateLocation.name);
            setAddress(updateLocation.address);
            setPhone(updateLocation.phone);
            setDevices(updateLocation.devices);
        })
        .catch((err) => {
            alert(err.message);
        });
    }

    useEffect(() => getLocation(), []);

    return (
        <div style={{ backgroundSize:"container"}}> <br></br>
        <div className="form-style-5">
            <h1>Update Location</h1> <br></br>
            <form onSubmit={(e) => {
                e.preventDefault();

                
            const newLocation = {
                name, 
                address,
                phone,
                devices
                }
                        
                axios.put("http://localhost:8099/location/updateLocation/"+id, newLocation)
                .then(() => {
                    alert("Location updated");
                })
                .catch((err) => {
                    alert(err);
                })
            }}>
            <div>
                <label for="name">Name</label>
                <input type="text" value={name} className="form-control" id="exampleInputPassword1" onChange={(e) => {
                    setName(e.target.value);
                }}/>
            </div>
            <div className="container">
                <label for="address">Address</label>
                <input type="text" value={address} className="form-control" id="exampleInputPassword1" placeholder="Enter the Address" onChange={(e)=>{
                    setAddress(e.target.value);
                }}/>
                
            </div>

            <div className="container">
                <label for="phone">Phone Number</label>
                <input type="text" value={phone} className="form-control" id="exampleInputPassword1" placeholder="Enter the phone number" onChange={(e)=>{
                    setPhone(e.target.value);
                }}/>
                
            </div>

            {
                devices.map(device => (
                    <div>
                        <label value={device.serialNumber} for="device">Device</label>
                        <input type="checkbox" className="form-control" value={device.serialNumber} id="exampleInputPassword1" onChange={(e)=>{
                            setDevices(e.target.value);
                        }}/>
                    </div>
                ))
            }


            <center><button type="submit" className="btn btn-primary" >update</button></center>
        </form>
        </div><br></br> </div>
    );
};

export default UpdateLocation;