import axios from 'axios';
import React, {useState, useEffect} from 'react';
//import V3 from "../images/V3.jpg";

import { Link } from "react-router-dom";


export default function AllDevice(){

    const [device, setDevice] = useState([]);

    useEffect(()=>{
        function getDevice(){
        axios.get("http://localhost:8099/device/getDevice").then((res)=>{
            setDevice(res.data);
            console.log(res.data)
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getDevice();
    },[device])

    const deleteDataC = (e) =>{
        var result = window.confirm("Are you sure?");
      if(result == true){
          axios.delete(`http://localhost:8099/device/deletDevice/${e._id}`).then((res)=>{
          }).catch(e =>{
              alert(e)
          })
      }else{
          e.preventDefault();
      }
    
   
    
    }
     //serach 
     const [serQuary,setSerQuary]=useState("");

     function searchDevice(event){
           setSerQuary(event.target.value);
     }
 
    return (
       
        <div style={{ backgroundSize:"100%"}}> <br></br> 
            <div style={{width:'80%'}}>

                <input onChange={searchDevice}  placeholder="Search....." style={{float:'right'}}/>

                </div> <br></br><br></br>
                <center>
                 <h2>All Devices</h2></center><br></br>
                {device.filter(e=>

                    e.serialNumber.toLowerCase().includes(serQuary) ||
                    e.serialNumber.includes(serQuary) 
        
                    )
                    .map(device => ( 
                
                <div>
                    <br></br>
                    <table width={"80%"} border={6} align="center" style={{backgroundColor:"white"}}>
                
                    <tr >
                    <center><th> Serial Number </th></center>
                        <th style={{backgroundColor:"#FFE5D9"}}> Type </th>
                        <th> Image </th>
                        <th style={{backgroundColor:"#FFE5D9"}}> Status </th>
                        </tr>
                        
                        <tr>
                        <td>{device.serialNumber}</td>
                        <td style={{backgroundColor:"#FFE5D9"}}>{device.type}</td>
                        <td>{device.image}</td>
                        <td style={{backgroundColor:"#FFE5D9"}}>{device.status}</td>
                        
                        </tr>   
                        </table>
                        <center>
                        <Link to={"/update/"+device._id} className="btn btn-warning">Update</Link>
                       <button className="btn btn-outline-success" style={{padding:10, margin:10, backgroundColor:"lightgrey"}} onClick={() => {deleteDataC(device)}}>Delete</button>
                       </center>
                       
                        </div>
                    
                        ))}
            <div >

               

            </div>
            <br></br><br></br>
        </div>
  );
}

