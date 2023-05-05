import { useEffect, useState } from 'react';
import { Card, Col, Container,Row,Spinner } from 'react-bootstrap';
import { Link,json,useParams}  from "react-router-dom"
import './AllPost.css'


function AllPost() {

    const Searpost = () =>{

         
    }

  let[post, allpost] = useState([]);
  let[refresh, setrefresh] = useState([false]);

//   let {postId} = useParams();/

   useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/posts')   
        .then(response =>  response.json())
        .then(json => allpost(json))
        .then(json => setrefresh(true));

    },[])

   if(refresh){

    
    return(

        <div>
            
            <Container>
                <Row className=' justify-content-between '>
                    {
                        post.map((item) =>{
                            return(

                                <>
                                   <Col lg={4} >

                                      <div>
                                      <a href={`/Comment/${item.id}`} className='text-decoration-none text-dark'>

                                      <Card className='setcard'>
                                            <Card.Body>
                                                {item.postId}
                                                <Card.Title className='fs-5'>{item.id} </Card.Title>
                                                <Card.Subtitle className="mb-2 text-maroon">{item.title}</Card.Subtitle>
                                                <Card.Text>
                                                         <p>{item.body}</p>
                                                </Card.Text>
                                                <Card.Link href={`/Posts/${item.id}`}>Click For Post</Card.Link>
                                            </Card.Body>
                                        </Card>
                                        </a>
                                      </div>
                                        
                                   </Col>
                                </>
                            )
  
                        })
                    }
                </Row>
           </Container>

        </div>
    );
  
    }
   else
   {
       return(
            <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
       );
   }
}

export default AllPost;