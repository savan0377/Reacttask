
// Useeffect,USESTATE
import { useEffect, useState } from 'react'
// import Axio
import axios from 'axios';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '../API/Axiosapis.css'

function AxiosApi() {

  let [mydata, printdata] = useState([]);
  let [info, setinfo] = useState(false);

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        printdata(response.data.results)
        setinfo(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  })

  if (info) {
    return (

      <div style={{ backgroundColor: "black", color: "white", overflow: "hidden" }}>
        <h1 style={{ textAlign: "center",marginTop:"30px"}}>Rick & Morty</h1>
        <div className='row'>
          {
            mydata.map((item) => {
              return (
                <>
                  <div style={{ width: "600px", color: "white" }} className="col-6 mt-5 d-flex g-2 ">
                    <img style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", width: "240px", marginLeft: "30px", height: "240px" }} src={item.image}></img>
                    <div className='ps-4' style={{ backgroundColor: "gray", borderStartEndRadius: "10px", borderBottomRightRadius: "10px", width: "300px" }}>
                      <h2> {item.name}</h2>
                      <div className='d-flex align-items-center'>
                        {(item.status == 'Alive') ? <h6 className='alive live'></h6>
                          : (item.status == 'Dead') ? <h6 className='dead live'></h6>
                            : <h6 className='unknown live'></h6>}
                        <h4> <font className='dotred'></font> {item.status}-{item.species} </h4>
                      </div>
                      <h5>Genger: {item.gender}</h5>
                      <h5>Origin: {item.origin.name}</h5>
                      <h5>Last Seen: {item.location.name}</h5>
                      
                    </div>
                  </div>
                </>
              );

            })
          }
        </div>
      </div>

    );
  }
  else {
    return (
       
      <h1 style={{ textAlign: "center" }}>Wait & Watch</h1>
    );
  }

}

export default AxiosApi;
