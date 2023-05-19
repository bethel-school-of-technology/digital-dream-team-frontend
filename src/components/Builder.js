import React, { useState } from "react";
import { Container, Row, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card, Form, Button, Col, CardGroup } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import BuilderIdentity from "./builderComponents/BuilderIdentity";
import Data from "./testObj/obj.json";
import ResumeAccolade from "./builderComponents/ResumeAccolade";
import ResumeItem from "./builderComponents/ResumeItem";
import Project from "./builderComponents/Project";
import Job from "./builderComponents/Job";

function Builder() {
  //builder output struct
  let temp_output = Data.empty

  const [builderInfo, setBuilderInfo] = useState(temp_output)

  //first enter does not add anything
  function setSkills(e) {
    e.preventDefault()//prevent double input
    const formData = new FormData(e.target),
                formDataObj = Object.fromEntries(formData.entries())
    //console.log(builderInfo.skills)

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
    //console.log(builderInfo)
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


  function updateJob(e){
    let temp = builderInfo.jobs//its like builderinfo.projects
    temp[e.target.name] = e.target.value
 
    setBuilderInfo(
      builderInfo => {
        return {
              ...builderInfo,
            jobs : temp
        }
      }
    )

  }

  function updateProject(e){
    let temp = builderInfo.projects//its like builderinfo.projects
    temp[e.target.name] = e.target.value
 
    setBuilderInfo(
      builderInfo => {
        return {
              ...builderInfo,
            projects : temp
        }
      }
    )
  }
  
  function updateAccomJob(temp){
    setBuilderInfo(
      builderInfo => {
        return {
              ...builderInfo,
            jobs : temp
        }
      }
    )
  }
  function updateAccomProj(temp){
    setBuilderInfo(
      builderInfo => {
        return {
              ...builderInfo,
            projects : temp
        }
      }
    )
  }

  function updateAccolades(e, data){
    let mkey = e.target.name.toLowerCase()
    let val = e.target.value
    let temp = builderInfo[data]//its like builderinfo.certifications
      //data form of a cert : {cert, provider, date}
    temp[mkey] = val
    console.log(val)
    setBuilderInfo(
      builderInfo => {
        return {
             ...builderInfo,
            data : temp
        }
     }
    )
    //console.log(builderInfo)
  }

  function newJob(e){
    let temp = builderInfo.jobs
    temp.push({
      "title" : "",
      "company": "",
      "startdate" : "",
      "enddate" : "",
      "accomplishments" : []
    })
    setBuilderInfo(
      builderInfo => {
        return {
              ...builderInfo,
            jobs : temp
        }
      }
    )
    e.preventDefault()

  }
  function newProject(e){
    let temp = builderInfo.projects
    temp.push({
      "title" : "",
      "startdate" : "",
      "enddate" : "",
      "accomplishments" : []
    })
    setBuilderInfo(
      builderInfo => {
        return {
              ...builderInfo,
            projects : temp
        }
      }
    )
    e.preventDefault()

  }

  function newEducation(e){
    let temp = builderInfo.educations
    if (typeof(temp) === "object"){
      temp = [temp]
    }
    temp.push({
      "school": "",
      "degree" : "",
      "date" : ""
    })
    setBuilderInfo(
      builderInfo => {
        return {
              ...builderInfo,
            educations : temp
        }
      }
    )
    e.preventDefault()
  }

  function removeItem(array, type){
    let temp = builderInfo
    temp[type] = array
    setBuilderInfo(temp
    )
  }

  function newCertification(e){
    let temp = builderInfo.certifications
    if (typeof(temp) === "object"){
      temp = [temp]
    }
    temp.push({
      "certification" : "",
      "provider" : "",
      "date" : ""
    })
    setBuilderInfo(
      builderInfo => {
        return {
              ...builderInfo,
            certifications : temp
        }
      }
    )
    e.preventDefault()
  }

  function outputResume(e){
    console.log(builderInfo)
    e.preventDefault()
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
            <Button onClick={(e) => newJob(e)}>+ Job</Button>
            <Job item={builderInfo.jobs}
                        updateAccomJob={updateAccomJob}
                        updateJob={updateJob} 
                        removeItem={removeItem}/>
          </ListGroupItem>
          <ListGroupItem variant="container">
            <Button onClick={(e) => newProject(e)}>+ Project</Button>
            <Project item={builderInfo.projects}
                        updateAccomProj={updateAccomProj}
                        updateProject={updateProject} 
                        removeItem={removeItem}/>
          </ListGroupItem>

          <ListGroupItem variant="container">
            <Button onClick={(e) =>newEducation(e)}>+ Education</Button>
            <ResumeAccolade accolades={builderInfo.educations}
              which={{a: "school", b: "degree", type: "educations"}}
              updateAccolades={updateAccolades}
              removeItem={removeItem}
            />
          </ListGroupItem>
          <ListGroupItem variant="container">
            <Button onClick={(e) => newCertification(e)}>+ Certifications</Button>
            <ResumeAccolade accolades={builderInfo.certifications}
              which={{a: "certification", b: "provider", type: "certifications"}}
              updateAccolades={updateAccolades}
              removeItem={removeItem}
            />
          </ListGroupItem>
        </ListGroup>
        <Button onClick={(e) => outputResume(e)}>Submit</Button>
      </div>
  )
}

export default Builder;