
import { useState } from 'react';
import './style.css';


function SimpleCalculator(){
       
    const [num1, setnum1] = useState();
    const [num2, setnum2] = useState();
    const [numtotal, setnumtotal] = useState();

    function caladd() {

        setnumtotal(Number(num1) + Number(num2));
    }
    
    function calsub() {

        setnumtotal(Number(num1) - Number(num2));
    }

    
    function calmult() {

        setnumtotal(Number(num1) * Number(num2));
    }

    return(

        <>
            <h1>Calculator</h1>

            <div className='center'>
                <input type="placeholde" placeholder='Enter' onChange={(event)=>{setnum1(event.target.value);}}></input>
                <br></br>
                <br></br>
                <input type="placeholder" placeholder='Enter ' onChange={(event)=>{setnum2(event.target.value);}}></input>
                <br></br>
                <input type="button" value={"+"} onClick={caladd}></input>
                <input type="button" value={"-"} onClick={calsub}></input>
                <input type="button" value={'x'} onClick={calmult}></input>
                <input type="button" value={"/"}></input>
                <br></br>
                <input type="text" placeholder='Click For Ans' value={numtotal}></input>
            </div>
        </>
    );
}

export default SimpleCalculator;