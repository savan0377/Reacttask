import { useState,useEffect } from "react";
import '../Task/StudentResult.css'
const Studentresult = ()=>{

    return(

        <>
            <section className="center">
              
                <table border={1} bgcolor={"cornflowerblue"}>
                    <tr className="span">Student Result</tr>
                    <tr>
                        <td>RollNo</td>
                        <td>Name</td>
                        <td>Gujrati(FL) </td>
                        <td>Social Science</td>
                        <td>English </td>
                        <td>Mathamatics </td>
                        <td>Science&Tchnology </td>
                        <td>Total</td>
                        <td>%</td>
                        <td>Grade</td>
                    </tr>
                    <tr>
                        <tr>1</tr>
                        <tr>2</tr>
                        <tr>3</tr>
                        <tr>4</tr>
                        <tr>5</tr>
                    </tr>
                    <tr >
                        <td>
                           
                        </td>
                    </tr>
                </table>
            </section>  
        </>

    );
}

export default Studentresult;
