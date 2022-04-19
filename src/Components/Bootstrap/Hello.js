import React from 'react'
// import { Col, Row, Container, Button, ButtonGroup } from 'react-bootstrap' // Less Ideally
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonGroup  from 'react-bootstrap/ButtonGroup'
import './Hello.css'

export default function Hello() {
  return (
    <Container fluid className="bg-success vh-100">
      <Row className=' mb-5 h-25'>
        <Col xs={12} md={6} lg={12} className='bg-danger border-col'>
          <p>Shares grid at medium, takes up at xs and lg</p>
          <p>Takes whole height</p>
        </Col>
        <Col xs={12} md={6} lg={8} className="bg-warning h-50 border-col">
          <p>Column 2 Takes whole grid below md screen</p>
          <p>Takes 50% height</p>
        </Col>
      </Row>
      <Row className='h-25 '>
        <Col xs={12} className="bg-info bg-opacity-50 ">
          <p>Column 3</p>
          <Row className=''>  {/* ms-5 */}
            <Col xs={8} md={8} className="nested-column h-100 h-50 d-flex  border-col">
              <p>Nested Column 1</p>
            </Col>
            <Col xs={2} md={4} className="nested-column h-100 h-50 border-col ">
              <p>Nested Column 2</p>
            </Col>
            <Col xs={4} className="nested-column h-100 h-50 border-col ">
              <p>Nested Column 3</p>
            </Col>
            <Col xs={8} className="nested-column h-100 h-50 border-col d-md-none">
              Hidden at and above medium
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className=' mt-5 bg-black text-decoration-line-through text-end text-uppercase text-danger text-white'>
        <Col className='border-col order-1'>
          <p>First In Code</p>
        </Col>
        <Col className="order-first order-0 text-text-decoration-none">
          <p >First In Order</p>
          <p className="text-decoration-none text-lowercase">Text-decoration applied in-line, but decoration in parent takes priority </p>
        </Col>
      </Row>
      <Row className="mt-2 ">
        <ButtonGroup>
          <Col xs={12} className="d-flex justify-content-center align-items-center">
            <Button className='btn-danger '>
              Danger
            </Button>
            <Button className='btn-primary ms-2 me-2'>
              Primary
            </Button>
            <Button className='btn-warning ms-2 me-2'>
              Warning
            </Button>
            <Button className="btn-dark">
              Dark
            </Button>
          </Col>
        </ButtonGroup>
        <ButtonGroup className="mt-2">
          <Col xs={12} className="d-flex justify-content-center align-items-center">
            <Button size='lg' variant="outline-danger">
              Outline Danger Large
            </Button>
            <Button size='lg' variant='outline-light ms-2 me-2'>
              Outline light Large
            </Button>
            <Button size='lg' variant='outline-warning ms-2 me-2'>
              Outline Warning Large
            </Button>
            <Button size='lg' variant='outline-dark'>
              Outline Dark Large
            </Button>
          </Col>
        </ButtonGroup>
      </Row>
    </Container>
  )
}
