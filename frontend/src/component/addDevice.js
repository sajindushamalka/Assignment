import React, {useState} from "react";
import axios from "axios";

export default function AddDevice(){

    const [serialNumber, setSerialNumber] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [status, setStatus] = useState("");

    function sendData(e){
        
        const newDevice = {
            serialNumber,
            type,
            image,
            status
        }
        console.log(newDevice)
        axios.post("http://localhost:8099/device/addDevice",newDevice).then(() => {
            alert("Add New Device");
            e.preventDefault();
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div style={{backgroundSize:"container"}}><br></br>
        <div className="form-style-5" > 
        <form onSubmit={sendData}>
            <div > 
            <center><h1>Add New Device</h1></center>
            <br></br><br></br>
            <div></div>
                 </div>

            <div className="container">
                <label for="serialNumber">Serial Number </label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Serial Number " onChange={(e)=>{
                    setSerialNumber(e.target.value);
                }}/>
            </div>

            <div className="container">
            <label for="Type">Type</label>  

            <select onChange={(e)=>{
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
                <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Upload Image" onChange={(e)=>{
                    setImage(e.target.value);
                }}/>
                
            </div>

            <div className="container">
            <label for="status">Status</label>  

            <select onChange={(e)=>{
                    setStatus(e.target.value);
                }} className="form-control">  
            <option value = "----"> ----- </option> 
            <option value = "active"> active </option>  
            <option value = "inactive"> inactive </option>     
            </select>  
            </div>
           

            <center><button type="submit" className="btn btn-primary" >Add Device</button></center>
            </form><br></br>
            </div><br></br></div>
    )

}