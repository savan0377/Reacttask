import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Card, Col, Container,Row ,Button} from 'react-bootstrap';

function Singalpost(){

     let[post ,singalpost] = useState([]);

     const sinpost = useParams();

     useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${sinpost.id}`)
          .then((response) => {
            response.json()
            .then((response) => {
              console.log(response)
              singalpost(response)
            })
          })
      }, [sinpost.id]);


      return(
            <div className='mt-5'>
                <Container>
                    <Card className="text-center">
                    <Card.Header><h3>Singal Post</h3></Card.Header>
                    <Card.Body>
                        <Card.Title className=''><h3>{post.title}</h3></Card.Title>
                        <Card.Text>
                                <p className='fs-4'>{post.body}</p>
                        </Card.Text>
                        <Button  href={`/Commen/${post.id}`}>Go To Commensts</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"><br></br></Card.Footer>
                    </Card>
                </Container>
            </div>
         
      );
    
}

export default Singalpost;