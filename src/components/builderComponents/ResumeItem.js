import React, {useState} from "react";
import {Form,Row, Container, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function ResumeItem(props) {

  let item = props.item
  let [bullets, setBullets] = useState(item.accomplishments)

  function Bullets(){
    if (!bullets) {
      return <></>
    }
    return bullets.map(bullet =>{
      return (
        <ListGroupItem>
          <Form><Form.Control></Form.Control></Form>
        </ListGroupItem>
      )
    })
  }
  return (
      <div>
        <ListGroup>
          <ListGroupItem>
            <Form>
              <Row>
                <Col><Form.Control placeholder="title"/></Col>
                
                <Col><Form.Control placeholder="Start"/></Col>
                <Col><Form.Control placeholder="End"/></Col>
              </Row>
            </Form>
          </ListGroupItem>
            {Bullets()}
            <ListGroupItem><Form><Form.Control placeholder="Accomplishments"/></Form>
          </ListGroupItem>
        </ListGroup>
    </div>
  )
}

export default ResumeItem;