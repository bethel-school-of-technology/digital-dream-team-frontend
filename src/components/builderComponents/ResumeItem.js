import React, {useState} from "react";
import {Form,Row, Container, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card, Col, Button, InputGroup } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function ResumeItem(props) {

  let [bullets, setBullets] = useState(props.item.accomplishments)


  function Bullets(){
    if (!bullets) {
      return <></>
    }
    return bullets.map(bullet =>{
      return (
        <Row><Col sm={{span:8, offset:4}}>
            <Form onSubmit={(e) => removeAcc(e, props.which)}>
              <InputGroup>
                <Form.Control defaultValue={bullet} name="accomplishment"/>
                <Button type="submit">-</Button>
              </InputGroup>
            </Form>
        </Col></Row>
      )
    })
  }

  function addAccomplishment(e, which){
    props.updateAccomplishments(e, which)
    if (bullets === undefined){
      setBullets([e.target[0].value])
    }else{
      setBullets([...bullets, e.target[0].value])
    }
    e.preventDefault()
    e.target.reset()
  }

  function removeAcc(e, which){
    props.removeAccomplishment(e, which)
    if (bullets.length() == 1){
      setBullets([])
    }else{
      let index = bullets.indexOf(e.target[0].value)//should get text in form control
      if (index !== -1){
        let temp = bullets.splice(index,1)
        setBullets(temp)
      }
    }
    e.preventDefault()
    e.target.reset()
  }

  return (
      <div>
        <ListGroup>
          <ListGroupItem >
            <Form onChange={(e)=>props.updateJobProj(e, props.which)}>
              <Row>
                <Col md={5}><Form.Control placeholder="title" name="title"/></Col>
                {props.which === "jobs" && <Col md={3}><Form.Control placeholder="Company" name="company"/></Col>}
                <Col md={2}><Form.Control placeholder="Start" name="startdate"/></Col>
                <Col md={2}><Form.Control placeholder="End" name="enddate"/></Col>
              </Row>
            </Form>
            </ListGroupItem>
        </ListGroup>
        {Bullets()}

        <Row><Col sm={{span:8, offset:4}}>
            <Form onSubmit={(e) => addAccomplishment(e, props.which)}>
              <InputGroup>
                <Form.Control placeholder="Accomplishments" name="accomplishment"/>
                <Button type="submit">+</Button>
              </InputGroup>
            </Form>
        </Col></Row>

    </div>
  )
}

export default ResumeItem;