import { useEffect, useState } from 'react'
import { Button, Card, Navbar, Nav, Container, NavDropdown, Form,Spinner, Row, Col,Offcanvas } from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

function Catagory() {

    //  catagory
  let [val, setval] = useState([]);
  let [status, getstatus] = useState([false]);

  let {savan} = useParams();

    // OffCanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  useEffect(() => {

    axios.get(`https://dummyjson.com/products/category/${savan}`)
      .then(function (response) {
        // handle success
        // console.log(response);
        setval(response.data.products)
        getstatus(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  })

  if(status){

    return(
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
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </div>

         <Container>
          <Row>  
              { 
                val.map((savan) => {
                    return (
                      <Col className='' lg={4}> 

                          {/* Usebacktic(``) */}

                          <a href={`/Singalproduct/${savan.id}`} className='text-decoration-none text-dark'>
                          <Card className='carddesign'>
                            <Card.Img variant="top" src={savan.thumbnail} style={{ width: "100%", height: "200px" }} />
                            <Card.Body>
                              <Card.Title>{savan.title}</Card.Title>
                              <Card.Text>
                                {savan.description}
                              </Card.Text>
                              <hr></hr>
                              <h3 className=''>₹ {savan.price}</h3>
                              <span className='rate'>  {savan.rating} <BsFillStarFill className='starrating' /> </span>
                              <br></br>
                              <Button className='mt-3' variant="primary">View More</Button>
                            </Card.Body>
                          </Card>
                        </a>

                      </Col>
                      
                      
                    );

                  })
                }
          </Row>
        </Container>
        </>
  
    );
  }
  else
    {
        return(
            <>
                <div className='anime' >
                    <Spinner className='anime'  clanimation="border" variant="primary"/>
            
                    <h3>Loading.......</h3>
                
                </div>
                    
            </>
        )
    }
}

export default Catagory;

