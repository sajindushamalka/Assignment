import axios from 'axios';
import React, {useState, useEffect} from 'react';
//import V3 from "../images/V3.jpg";

import { Link } from "react-router-dom";


export default function AllLocation(){

    const [location, setLocation] = useState([]);

    useEffect(()=>{
        function getDevice(){
        axios.get("http://localhost:8099/location/getLocation").then((res)=>{
            setLocation(res.data);
            console.log(res.data)
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getDevice();
    },[location])

    const deleteDataC = (e) =>{
        var result = window.confirm("Are you sure?");
      if(result == true){
          axios.delete(`http://localhost:8099/location/deleteLocation/${e._id}`).then((res)=>{
          }).catch(e =>{
              alert(e)
          })
      }else{
          e.preventDefault();
      }
    
   
    
    }
     //serach 
     const [serQuary,setSerQuary]=useState("");

     function searchLocation(event){
           setSerQuary(event.target.value);
     }
 
    return (
       
        <div style={{ backgroundSize:"100%"}}> <br></br> 
            <div style={{width:'80%'}}>

                <input onChange={searchLocation}  placeholder="Search....." style={{float:'right'}}/>

                </div> <br></br><br></br>
                <center>
                 <h2>All Location</h2></center><br></br>
                {location.filter(e=>

                    e.name.toLowerCase().includes(serQuary) ||
                    e.name.includes(serQuary) 
        
                    )
                    .map(loco => ( 
                
                <div>
                    <br></br>
                    <table width={"80%"} border={6} align="center" style={{backgroundColor:"white"}}>
                
                    <tr >
                    <center><th> Name </th></center>
                        <th style={{backgroundColor:"#FFE5D9"}}> Address </th>
                        <th> Phone </th>
                        <th style={{backgroundColor:"#FFE5D9"}}> Devices </th>
                        </tr>
                        
                        <tr>
                        <td>{loco.name}</td>
                        <td style={{backgroundColor:"#FFE5D9"}}>{loco.address}</td>
                        <td>{loco.phone}</td>
                        <td style={{backgroundColor:"#FFE5D9"}}>{loco.device}</td>
                        
                        </tr>   
                        </table>
                        <center>
                        <Link to={"/updateLocation/"+loco._id} className="btn btn-warning">Update</Link>
                       <button className="btn btn-outline-success" style={{padding:10, margin:10, backgroundColor:"lightgrey"}} onClick={() => {deleteDataC(loco)}}>Delete</button>
                       </center>
                       
                        </div>
                    
                        ))}
            <div >

               

            </div>
            <br></br><br></br>
        </div>
  );
}

