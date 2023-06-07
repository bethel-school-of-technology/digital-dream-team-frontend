import React, {useState, useReducer} from "react";
import {Form,Row, Container, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card, Col, Button, InputGroup } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";


function Project(props){
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


  let [Projects, setProjects] = useState(props.item)

  function removeProject(e, item, type){
    let indexAcc = Projects.findIndex(function(acc){
      return acc === item
    })
    
    let temp = Projects.splice(indexAcc, 1)

    props.removeItem(temp,type)
    e.preventDefault()
    e.target.reset()
    forceUpdate()
  }

  //map each individual project/job with it's accomplishments, add a blank acomplishment to bottom
  function projectsAndAccomps(){
    return Projects.map((proj,index) => {

      return (<Container>
        <ListGroup>
          <ListGroupItem >
            <Form onSubmit={(e, proj) => removeProject(e, proj, "projects")} onChange={(e)=>props.updateProject(e, index)}>
              <Row>
                <InputGroup>
                  <Col md={5}><Form.Control placeholder="title" defaultValue={proj.title} name="title"/></Col>
                  <Col md={2}><Form.Control placeholder="Start"defaultValue={proj.start} name="startdate"/></Col>
                  <Col md={2}><Form.Control placeholder="End" defaultValue={proj.end} name="enddate"/></Col>
                  <Button type="submit">-</Button>
                </InputGroup>
              </Row>
            </Form>
          </ListGroupItem>
        </ListGroup>

        {bullets(proj)}

        <Row><Col sm={{span:8, offset:4}}>
          <Form onSubmit={(e) => addAccomplishment(e, proj)}>
            <InputGroup>
              <Form.Control placeholder="Accomplishments" name="accomplishment"/>
              <Button type="submit">+</Button>
            </InputGroup>
          </Form>
        </Col></Row>
      </Container>)
    })
  }
  function bullets(proj){
    
    if (!proj.accomplishments) {
      return <></>
    }
    let accom = proj.accomplishments
    //console.log(accom)
    return accom.map(bullet =>{
      return (
        <Row><Col sm={{span:8, offset:4}}>
            <Form onSubmit={(e, bullet) => removeAcc(e, bullet, proj)}>
              <InputGroup>
                <Form.Control defaultValue={bullet} name="accomplishment"/>
                <Button type="submit">-</Button>
              </InputGroup>
            </Form>
        </Col></Row> 
      )
    })
  }

  function addAccomplishment(e, proj){
    if (proj.accomplishments === undefined){
      proj.accomplishments = []
    }
    proj.accomplishments.push(e.target[0].value)//cannot read properties of undefines
    let temp = Projects

    let index = temp.findIndex(function(project){
      return project.title === proj.title
    })
    temp[index] = proj
    console.log(temp)
    setProjects(temp)
    props.updateAccomProj(temp)

    e.preventDefault()
    e.target.reset()
    forceUpdate()
  }

  function removeAcc(e, accom, proj){

    let indexAcc = proj.accomplishment.findIndex(function(acc){
      return acc === accom
    })
    proj.accomplishment.splice(indexAcc, 1)
    let temp = Projects

    let index = temp.findIndex(function(project){
      return project.title === proj.title
    })

    temp[index] = proj
    setProjects(temp)
    props.updateAccomProj(temp)
    e.preventDefault()
    e.target.reset()
    forceUpdate()

  }

  return (
      <div>
        {projectsAndAccomps()}
    </div>
  )
}

export default Project