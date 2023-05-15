import React, {useState} from "react";
import { Form,Container, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card, Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function ResumeAccolade(props) {
  let accolades = props.accolades
  let bigA = props.which.a.charAt(0).toUpperCase()+ props.which.a.slice(1)
  let bigB = props.which.b.charAt(0).toUpperCase()+ props.which.b.slice(1)
  function listAccolades(){
    return accolades.map(accolade =>{
      <ListGroupItem>
        <p>test accolade</p>
      </ListGroupItem>
    })
  }
  function setAccolade(){
    console.log("does stuff")
  }
  return (
      <div>
        <ListGroup>
        {listAccolades()}
        <ListGroupItem>
        <Form onSubmit={(e) => setAccolade(e)}>
          <Row><Col><Form.Control placeholder={bigA}  type="text" name={props.which.a}/></Col>
          <Col><Form.Control placeholder={bigB}  type="text" name={props.which.b}/></Col>
          <Col md={3}><Form.Control  placeholder="date acquired"  type="text" name="date"/></Col></Row>
          </Form>
        </ListGroupItem>
        </ListGroup>
    </div>
  )
}

export default ResumeAccolade;