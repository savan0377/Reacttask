import React from "react";
import { useState } from "react";
import '../Task/MyCalculator.css'
function MyCalculator(){

  
  
       
    const [display,setdisplay] = useState("");
    const [f_val,setf_val] = useState('');
    const [sign,setsign] = useState('');

    const no = (e) =>{
      setdisplay(display.concat(e.target.value));
    }
    const action = (s) =>{
      setf_val(display);
      setsign(s);
      setdisplay('');
    }
    const calc = () =>{
      
      if(sign=='+')
      {
        setdisplay(parseInt(f_val)+parseInt(display))
      }
      if(sign=='-')
      {
        setdisplay(parseInt(f_val)-parseInt(display))
      }
      if(sign=='*')
      {
        setdisplay(parseInt(f_val)*parseInt(display))
      }
      if(sign=='/')
      {
        setdisplay(parseInt(f_val)/parseInt(display))
      }
      if(sign=='%')
      {
        setdisplay((parseInt(f_val)*parseInt(display))/100)
      }
    }
    const clear = () =>{
      setdisplay("");
    }

    const backspace = () =>{
      setdisplay(display.slice(0, -1));
    }

    
  return (
    <>
      
        <div className="bg">
            <form>
              <input type="text" placeholder='0' value={display} />
            </form>
            <br></br>
            <div className="outlate">
              <input type="button" onClick={clear} value="Clear" id="clear" />
              <input type="button"onClick={backspace} value="C" id="backspace" />
              <input type="button" value="%" onClick={()=>{action('%')}} />
              <input type="button" value="/" onClick={()=>{action('/')}} />
              <br></br>
          
              <input type="button" value="7" onClick={no} />
              <input type="button" value="8" onClick={no} />
              <input type="button" value="9" onClick={no} />
              <input type="button" value="*" onClick={()=>{action('*')}} />
              <br></br>
             
              <input type="button" value="4" onClick={no} />
              <input type="button" value="5" onClick={no} />
              <input type="button" value="6" onClick={no} />
              <input type="button" value="-" onClick={()=>{action('-')}} />
              <br></br>
              <input type="button" value="1" onClick={no} />
              <input type="button" value="2" onClick={no} />
              <input type="button" value="3" onClick={no} />
              <input type="button" value="+" onClick={()=>{action('+')}} />
              <br></br>
              <input type="button" value="0" onClick={no} />
              <input type="button" value="00" onClick={no} />
              <input type="button" value="." onClick={no} />
             
              <input type="button" value="=" id='result' onClick={calc} />
            </div>
        </div>

    </>
  );
}

export default MyCalculator;