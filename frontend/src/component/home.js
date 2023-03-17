import V8 from '../photos/V8.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home(){
    
    return (
        <div><br></br>
        <br></br>
        <center>
        <img src={V8}/>
        </center>
       <br></br>
       <br></br>
       <br></br>
       
       <br></br>
       <center>
       <h1>
        Assignment 
       </h1>
       <br></br>
       <br></br>
       <div>
       <p>I am SAJINDU SHAMALKA.  I am currently a sliiit undergraduate student pursuing a software engineering degree.<br></br> 
       I did the assignment by self-learning some functions but didn't get the result you mentioned. 
       but I tried to complete the assignment within the given time.</p>
       </div>
       </center>
        <br></br>
        <br></br>
          <table width={"100%"}>
            <tr>
                <td>
                <a href="/api"> <button type="button" class="btn btn-outline-primary">Home</button></a>
                </td>
                <td>
                <a href="/api/AllLocation"><button class="btn btn-primary" >All Location</button></a>
                </td>
                <td>
                <a href="/api/allDevice"> <button class="btn btn-primary">All Devies</button></a>
                </td>
                <td>
                <a href="/api/addlocation"> <button class="btn btn-primary">Add Location</button></a>
                </td>
                <td>
                <a href="/api/addDevice"> <button class="btn btn-primary">Add Devies</button></a>
                </td>
            </tr>
          </table>
          <br></br>
        </div>
        
    )
}