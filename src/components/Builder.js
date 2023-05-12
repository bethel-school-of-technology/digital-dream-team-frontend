import React, { useState } from "react";
import { Container, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card, Form, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import BuilderIdentity from "./builderComponents/BuilderIdentity";
import Data from "./testObj/obj.json";
import ResumeAccolade from "./builderComponents/ResumeAccolade";
import ResumeItem from "./builderComponents/ResumeItem";

function Builder() {
  //builder output struct
  let temp_output = Data.empty

  const [builderInfo, setBuilderInfo] = useState(temp_output)

  //
  function setSkills(e) {
    console.log(e)//check format of data
    e.preventDefault()//prevent double input
    e.target.reset()//clear input
  }

  function mapSkills(){
    if (!builderInfo.skills || Array.isArray(builderInfo.skills)){
      return <></>
    }
    return builderInfo.skills.map((skill) => {
      return <div><button>X</button><p>{skill}</p></div>
    })
  }
  
  return (
      <div>
        <ListGroup>
          <ListGroupItem>
            <BuilderIdentity identity={builderInfo.identity} />
          </ListGroupItem>

          <ListGroupItem>
            <h2>Skills</h2>
              <Form><Form.Control placeholder="enter Skill Here" onSubmit={e => setSkills(e)}/></Form>
              {mapSkills()}
          </ListGroupItem>

          <ListGroupItem>
            <Button>+ Job</Button>
            <ResumeItem item={builderInfo.jobs}/>
          </ListGroupItem>
          <ListGroupItem>
            <Button>+ Project</Button>
            <ResumeItem item={builderInfo.projects}/>
          </ListGroupItem>

          <ListGroupItem>
            <Button>+ Education</Button>
            <ResumeAccolade accolades={builderInfo.education} />
          </ListGroupItem>
          <ListGroupItem>
            <Button>+ Certifications</Button>
            <ResumeAccolade accolades={builderInfo.certifications} />
          </ListGroupItem>
        </ListGroup>
        <Button>Submit</Button>
      </div>
  )
}

export default Builder;