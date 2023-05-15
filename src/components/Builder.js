import React, { useState } from "react";
import { Container, Row, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card, Form, Button, Col, CardGroup } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import BuilderIdentity from "./builderComponents/BuilderIdentity";
import Data from "./testObj/obj.json";
import ResumeAccolade from "./builderComponents/ResumeAccolade";
import ResumeItem from "./builderComponents/ResumeItem";

function Builder() {
  //builder output struct
  let temp_output = Data.empty

  const [builderInfo, setBuilderInfo] = useState(temp_output)

  //first enter does not add anything
  function setSkills(e) {
    e.preventDefault()//prevent double input
    const formData = new FormData(e.target),
                formDataObj = Object.fromEntries(formData.entries())
    console.log(builderInfo.skills)

    //may consolidate all setBuilders into one function call
    setBuilderInfo(
      builderInfo =>{
        return {
             ...builderInfo,
             skills : [...builderInfo.skills, formDataObj.skill]
        }
     }
    )
    //console.log(builderInfo.skills)
    e.target.reset();
  }

  function mapSkills(){
    if (!builderInfo.skills) {
      return <></>
    }
    console.log(builderInfo)
    return builderInfo.skills.map((skill) => {
      return <ListGroupItem><Card><Button>X {skill}</Button></Card></ListGroupItem>
    })
  }


  function setIdentity(e){
    let mkey = e.target.name.toLowerCase()
    let val = e.target.value
    let tempIdentity = builderInfo.identity
    tempIdentity[mkey] = val
    setBuilderInfo(
      builderInfo => {
        return {
             ...builderInfo,
            identity : tempIdentity
        }
     }
    )
    //console.log(builderInfo)
  }


  //some of this may need to get reworked, trying for code reuse
  // data is a flag telling function if it is a job or project
  function updateJobProj(e, data){
    
    let temp = builderInfo[data]//its like builderinfo.projects
    temp[e.target.name] = e.target.value
 
    if (data === "jobs"){
      setBuilderInfo(
        builderInfo => {
          return {
               ...builderInfo,
              jobs : temp
          }
       }
      )
    } else {
      setBuilderInfo(
        builderInfo => {
          return {
                ...builderInfo,
              projects : temp
          }
        }
      )
    } 
    //console.log(builderInfo)
  }
  function updateAccomplishments(e, data){
    let val = e.target[0].value
    console.log(typeof(builderInfo.jobs))
    let temp;

    if (data === "jobs"){

      if (builderInfo.jobs.accomplishments === undefined){
        temp = [val]
      } else{
        temp = [...builderInfo.jobs.accomplishments, val]
      }

      setBuilderInfo(
        builderInfo => {
          return {
               ...builderInfo,
              jobs : {
                accomplishments : temp
              }
          }
       }
      )
    } else {
      if (builderInfo.projects.accomplishments === undefined){
        temp = [val]
      } else{
        temp = [...builderInfo.projects.accomplishments, val]
      }
      
      setBuilderInfo(
        builderInfo => {
          return {
                ...builderInfo,
              projects : {
                accomplishments : temp
              }
          }
        }
      )
    } 
  }

  function updateAccolades(e, data){
    let mkey = e.target.name.toLowerCase()
    let val = e.target.value
    let temp = builderInfo[data]//its like builderinfo.certifications
      //data form of a cert : {cert, provider, date}
    temp[mkey] = val
    setBuilderInfo(
      builderInfo => {
        return {
             ...builderInfo,
            data : temp
        }
     }
    )
    console.log(builderInfo)
  }

  
  return (
      <div>
        <style type="text/css">
          {`
          .list-group-item-container {
            background-color: #D9D9D9;
          }
          `}
      </style>
        <ListGroup>
          <ListGroupItem variant="container">
            <BuilderIdentity identity={builderInfo.identity}
                              updateIdentity={setIdentity} />
          </ListGroupItem>

          <ListGroupItem variant="container">

              <Row><Col sm={3}>
                <Form onSubmit={(e) => setSkills(e)}><Form.Label>Skills</Form.Label><Form.Control placeholder="enter Skill Here"  type="text" name="skill"/></Form>
              </Col></Row>
              <CardGroup>{mapSkills()}</CardGroup>
          </ListGroupItem>

          <ListGroupItem variant="container">
            <Button>+ Job</Button>
            <ResumeItem item={builderInfo.jobs}
                          which={"jobs"}
                        updateJobProj={updateJobProj} 
                        updateAccomplishments={updateAccomplishments}/>
          </ListGroupItem>
          <ListGroupItem variant="container">
            <Button>+ Project</Button>
            <ResumeItem item={builderInfo.projects}
                        which={"projects"}
                        updateJobProj={updateJobProj}
                        updateAccomplishments={updateAccomplishments}/>
          </ListGroupItem>

          <ListGroupItem variant="container">
            <Button>+ Education</Button>
            <ResumeAccolade accolades={builderInfo.education}
              which={{a: "school", b: "degree"}}
              updateAccolades={updateAccolades}
            />
          </ListGroupItem>
          <ListGroupItem variant="container">
            <Button>+ Certifications</Button>
            <ResumeAccolade accolades={builderInfo.certifications}
              which={{a: "provider", b: "certification"}}
              updateAccolades={updateAccolades}
            />
          </ListGroupItem>
        </ListGroup>
        <Button>Submit</Button>
      </div>
  )
}

export default Builder;