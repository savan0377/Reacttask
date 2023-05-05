import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Card, Navbar, Nav, Container, NavDropdown, Form,Spinner, Row, Col,Offcanvas } from 'react-bootstrap';
import ReactMagnifyImage from 'react-magnify-image'
import { BsFillStarFill } from "react-icons/bs";

function Singalproduct() {

  let [pro, getpro] = useState([]);
  let [status, getstatus] = useState(false);
  let [getimg,getcurrentimg] = useState([]);
  const [smallimg, setsmallimg] = useState([])
  const prom = useParams();
  
 //offcanvas 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

    axios.get(`https://dummyjson.com/products/${prom.id}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        getpro(response.data)
        setsmallimg(response.data.images)
        getcurrentimg(response.data.thumbnail)
        getstatus(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [prom.id]);

  //  catagory
  let [val, setval] = useState([]);
  let {savan} = useParams();
  
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
  })

  if (status){
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
                            val.map((savan) =>{
                                return(
                                <li>
                                   <Button className='catbtn' href={`/Category/${savan}`}>
                                     {savan}
                                   </Button>
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
            <Col className='d-flex mt-5' lg={6}>

              <div className='me-5'>
                   {
                       smallimg.map((i) => (
                            <div  className='mb-3' onMouseOver={() => getcurrentimg(i)}>
                              <img className='imghover' src={i} width="100px" height="100px"/>
                            </div>
                       ))
                   }
              </div>

              <div className='d-flex'>
                  <ReactMagnifyImage {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: getimg
                        },
                        largeImage: {
                            src: getimg,
                            width: 1200,
                            height: 1800
                        }
                    }} />
              </div>
               
            </Col>
            <Col className='mt-5'>
                   <h2> { pro.title}</h2>
                   <h2> ₹ { pro.price}</h2>
                   <h3>Key Feature</h3>
                   <h4> { pro.description} </h4>
                   <span className='rate'>  {pro.rating} <BsFillStarFill className='starrating'/> </span>
                   <h4>{pro.category}</h4>
                   <h4>{pro.stock}</h4>

            </Col>
         </Row>
      </Container>  
    </>
   )
  } 
  else
  {  
    return(

        <div className='anime' >
         <Spinner className='anime'  clanimation="border" variant="primary"/>
      
            <h3>Loading.......</h3>
          
        </div>
        )
  }
  
}



export default Singalproduct;