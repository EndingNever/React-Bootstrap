import React from 'react'
import "./Scratch.css"
import { Container, Row, Col}  from 'react-bootstrap' // Less Ideally
// import Container from 'react-bootstrap/Container' 
// import Row from 'react-bootstrap/Row'    
// import Col from 'react-bootstrap/Col'    


export default function Scratch() {
  return (
    <>
    <Container className='vh-100'>
      <Row className='row h-50'>
        <Col>
          <p>Try</p>
        </Col>
        <Col>
          
        </Col>
      </Row>
      <Row className='row h-50'>
        <Col>
          Column 3
        </Col>
      </Row>
    </Container>
     </>
  )
}
