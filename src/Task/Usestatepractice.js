import { useState } from "react";
import './style.css';

function UseStaterevise(){
     
     var [jetname,setname] = useState("Hiii")
     var [jetcity,setcity] = useState("My Self Savan")
    //  Blank
     var [txt,settxt] = useState("")

     const takebtn = () =>{

        setname("I Am Coming From ")
        setcity("Bangaluru,Karnatak")
        console.log(txt);
     }
     
    return(
         <>   
         
               <div className="App">
                     <h1>{jetname}  {setname}</h1>
                     <h1>{jetcity}  {setcity}</h1>
                  </div>

               <div className="center">
                  <input className="btn"  type="button" value="Click For More Info"  onClick={takebtn}></input><br></br>
                     
                  <input type="text" className="writetext" placeholder="write somthing" onChange={(t) => { console.log(t.target.value); }}></input>
               </div>
            
         </>
    );
}

export default UseStaterevise;