// import Components
import React from "react";
import { useState } from "react";
import MyCalculator from "./Task/MyCalculator";
import Calculator from "./Task/SimpleCalculator";
// import './Task/style.css'
import UseStaterevise from "./Task/Usestatepractice";
// Website
// import Shella from "./Shella/Shella";
// import './Shella/Shella.css'
import Studentresult from "./Task/StudentResult";
import AxiosApi from "./API/AxiosApi";
import { Route, Routes } from "react-router-dom";
import Productsite from "./ProductSiteAPI/Productsite";
import Singalproduct from "./ProductSiteAPI/Singalproduct";
import Catagory from "./ProductSiteAPI/Category";
import AllPost from "./Fetchapi/AllPost";
import Singalpost from "./Fetchapi/Singalpost";
import Comments from "./Fetchapi/Comments";
function App() {

    return(
         <>   
             {/* <Calculator/> */}
             {/* <UseStaterevise/> */}
              {/* <MyCalculator/> */}
                 {/* <Shella/> */}
                 {/* <Studentresult/> */}
                 {/* <AxiosApi/> */}
                 {/* <Productsite/> */}
                 

            <Routes>
                {/* 
              <Route  path="/" element={<Productsite/>} />
              <Route  path="Singalpro/:id" element={ <Singalproduct/>} />
              <Route  path="category/:savan" element={ <Catagory/>} />
                */}
                <Route path="/" element={<AllPost />} />
                <Route path="/Posts/:id" element={<Singalpost />} />
                <Route path="/Commen/:id" element={<Comments/>} />
            </Routes> 

         </>
  );
}

export default App;
