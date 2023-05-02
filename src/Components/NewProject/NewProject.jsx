import React, { useState } from 'react'
import { Container, Col, Row, Button  } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import './NewProject.css'

export default function NewProject() {

  const [user, newUser ] = useState();
  const [age, setAge ] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setAge((date.getFullYear() - input) * 375 + remains);

    newUser((date.getFullYear() - age) * 375 + remains);




  }
  // const date = new Date() * 30;


  const date = new Date();

  const monthsToDays = date.getMonth() * 30;
  const days = date.getDate();
  const remains = monthsToDays + days;



  const Submit = (event) => {
    setAge(event.target.value)

  }



  return (
   
    <>
    

      <Container>

        <h1 className='newText'> Hello to my TestProject! </h1>
        <div className='newForm'>
          <input type ='text' placeholder='hello' onChange={Submit}/>
        </div>
        <Row>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2rem'}}>

          <Button onClick={handleSubmit} variant='primary'> Submit </Button>

          </div>

          <Row>
            <h1><span>{user}</span></h1>
          </Row>
        </Row>
    
    
    </Container>

    </>
    
  )
}
