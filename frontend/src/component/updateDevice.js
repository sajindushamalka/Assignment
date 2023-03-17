import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function UpdateDevice() {

    const [serialNumber, setSerialNumber] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [status, setStatus] = useState("");
    
    const {id} = useParams();
    
    const getDevice = () => {
        axios.get("http://localhost:8099/device/get/"+id)
        .then((res) => {
            const updateDevice = {
                serialNumber: res.data.serialNumber,
                type: res.data.type,
                image: res.data.image,
                status: res.data.status
            }

            // console.log(res.data);
            setSerialNumber(updateDevice.serialNumber);
            setType(updateDevice.type);
            setImage(updateDevice.image);
            setStatus(updateDevice.status);
        })
        .catch((err) => {
            alert(err.message);
        });
    }

    useEffect(() => getDevice(), []);

    return (
        <div style={{ backgroundSize:"container"}}> <br></br>
        <div className="form-style-5">
            <h1>Update Device</h1> <br></br>
            <form onSubmit={(e) => {
                e.preventDefault();

                
            const newDevice = {
                serialNumber, 
                type,
                image,
                status
                }
                        
                axios.put("http://localhost:8099/device/updateDevice/"+id, newDevice)
                .then(() => {
                    alert("Device updated");
                })
                .catch((err) => {
                    alert(err);
                })
            }}>
            <div>
                <label for="name">Serial Number</label>
                <input type="text" value={serialNumber} className="form-control" id="exampleInputPassword1" onChange={(e) => {
                    setSerialNumber(e.target.value);
                }}/>
            </div>

            <div className="container">
            <label for="Type">Type</label>  

            <select value={type} onChange={(e)=>{
                    setType(e.target.value);
                }} className="form-control">  
            <option value = "----"> ----- </option> 
            <option value = "pos"> pos </option>  
            <option value = "kisok"> kisok </option> 
            <option value = "signage"> signage </option>      
            </select>  
            </div>

            <div className="container">
                <label for="image">Image</label>
                <input type="file" value={image} className="form-control" id="exampleInputPassword1"  onChange={(e)=>{
                    setImage(e.target.value);
                }}/>
                
            </div>

            <div className="container">
            <label for="status">Status</label>  

            <select value={status}  onChange={(e)=>{
                    setStatus(e.target.value);
                }} className="form-control">  
            <option value = "----"> ----- </option> 
            <option value = "active"> active </option>  
            <option value = "inactive"> inactive </option>     
            </select>  
            </div>
        

            <center><button type="submit" className="btn btn-primary" >update</button></center>
        </form>
        </div><br></br> </div>
    );
};

export default UpdateDevice;