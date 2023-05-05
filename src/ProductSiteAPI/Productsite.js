
// Useeffect,USESTATE
import { useEffect, useState } from 'react'
// import Axio
import axios from 'axios';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Navbar, Nav, Container, NavDropdown, Form, Spinner, Offcanvas } from 'react-bootstrap';
import './Productsite.css'
import { BsFillStarFill } from "react-icons/bs";

import { useParams } from 'react-router-dom';

function Productsite() {

  let [mydata, printdata] = useState([]);
  let [status, getstatus] = useState(false);


  // OffCanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchproduct = (s) =>{
 
    axios.get(`https://dummyjson.com/products/search?q=${s.target.value}`)
    .then(function (response) {
      // handle success
      console.log(response.data.products);
      printdata(response.data.products)
      getstatus(true)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  }


  useEffect(() => {

    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        // handle success
        console.log(response.data.products);
        printdata(response.data.products)
        getstatus(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    // axios.get('https://dummyjson.com/products/categories')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //     setval(response.data)
    //     getstatus(true)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
  }, [])

  // catagory
  let [val, setval] = useState([]);
  let { data } = useParams();
  useEffect(() => {

    axios.get("https://dummyjson.com/products/categories")
      .then(function (response) {
        // handle success
        console.log(response);
        setval(response.data)
        getstatus(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  if (status) {
    return (

      <>
        <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Button className='me-3' variant="primary" onClick={handleShow}>
                Catogory
              </Button>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div>
                    <ul>
                      {
                        val.map((savan) => {
                          return (
                            <li>
                              <div key={savan}>

                                <Button className='catbtn' href={`/Category/${savan}`}>
                                  {savan}
                                </Button>
                              </div>

                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>

              <Navbar.Brand href="#">S-Eco</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Product</Nav.Link>
                  <Nav.Link href="#action2">Services</Nav.Link>
                  <Nav.Link href="#action2">Catogory</Nav.Link>
                  <Nav.Link href="#action2">Aboutus</Nav.Link>

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    // for Serch Product
                    onChange={(s)=> searchproduct(s)}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className='d-flex flex-wrap mt-5 justify-content-evenly '>

          {

            mydata.map((data, i) => {
              return (
                <>
                  {/* Usebacktic(``) */}
                  <a href={`/Singalpro/${data.id}`} className='text-decoration-none text-dark'>
                    <Card className='carddesign' key={i}>
                      <Card.Img variant="top" src={data.thumbnail} style={{ width: "100%", height: "200px" }} />
                      <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                          {data.description}
                        </Card.Text>
                        <hr></hr>
                        <h3 className=''>₹ {data.price}</h3>
                        <span className='rate'>  {data.rating} <BsFillStarFill className='starrating' /> </span>
                        <br></br>
                        <Button className='mt-3' variant="primary">View More</Button>
                      </Card.Body>
                    </Card>
                  </a>
                </>
              );

            })
          }
        </div>
      </>

    );
  }
  else {
    return (
      <div >

        <Spinner className='anim' animation="border" variant="primary" />


        <h3 >Loading.......</h3>

      </div>
    );

  }

}

export default Productsite;