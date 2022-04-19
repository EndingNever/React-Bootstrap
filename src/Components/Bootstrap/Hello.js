import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import './Hello.css'

export default function Hello() {
  return (
    // <div className="row">
    //   <div className="col">
    //     container 1
    //   </div>
    //   <div className="col">
    //     container 2
    //   </div>
    // </div>

    <Container fluid className="bg-success vh-100">
      <Row className='h-25'>
        <Col xs={12} md={6} className='bg-danger h-50'>
          Column 1
        </Col>
        <Col xs={12} md={6} className="bg-warning h-50">
          Column 2
        </Col>
      </Row>
      <Row className='h-50'>
        <Col xs={12} className="mt-5 bg-warning h-100">
          Column 3
          <Row>
            <Col className="ms-5">
              Nested Column 4
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
