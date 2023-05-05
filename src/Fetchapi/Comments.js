import { useEffect, useState } from 'react'
import { Button,Card,Navbar,Nav,Container,NavDropdown,Form,Row,Col,Spinner} from 'react-bootstrap';
import { useParams,Link } from 'react-router-dom';

function Comments (){
  
  let[singalpost,getsingalpost ] = useState([]);
  let[refresh, setrefresh] = useState([false]);
  
  
  const getpost  = useParams();

  useEffect(() => {
        
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${getpost.id}`)   
    .then((response) => { 
          response.json()
    .then((response) => {
        console.log(response)
        getsingalpost(response)
        setrefresh(true)
        
        })
      })

},[getpost.id])

if(refresh){
    
    return(

        <div>
            <Container>
                <Row>
                    {
                        singalpost.map((item) =>{
                            return(
    
                                <>
                                   <Col lg={12}>
    
                                      <div>
                                          <Card className='mt-5'>
                                            <Card.Header className=''><h3>Comments</h3></Card.Header>
                                            <Card.Body>
                                                 <Link to={`/Posts/${item.id}`} style={{ textDecoration: 'none' }} className='i1'><div className='fw-semibold'><span className='fw-bold'>id : </span>{item.id}</div></Link>
    
                                                <blockquote className="blockquote mb-0">
                                               
                                                     <div>{item.name}</div>
                                                     <div className=' text-info'>{item.email}</div>
                                                     <div className=' text-primary'>{item.body}</div>
                                                     
                                                </blockquote>
                                            </Card.Body>
                                        </Card>
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
        <div >

        <Spinner className='anim' animation="border" variant="primary" />


        <h3 >Loading.......</h3>

      </div>
    )
}

}

export default Comments;