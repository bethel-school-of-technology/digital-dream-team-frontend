
import React, { useContext, useState,useEffect } from "react";
import {  Card, Form, Button, CardGroup } from "react-bootstrap";
import Data from "./testObj/obj.json"
import Printable from "./generatorComponents/Printable";
import ResumeContext from "./contexts/ResumeContext";
import { FaSpinner } from 'react-icons/fa';
function Generator(){
  let { resumes, apiCall } = useContext(ResumeContext);

  //let testResume = Data.example
  const [printResume, setPrintResume] = useState(Data.empty)
  const [runUse, setRunUse] = useState(true)
  const [showLoading, setShowLoading] = useState(false)
  useEffect(() => {
    if (runUse){
      if (resumes.length > 0 ){
        let genRes = {
          "identity": resumes[0].identity,
          "skills": resumes[0].skills,
          "jobs" : resumes[0].jobs,
          "projects" : resumes[0].project,
          "educations" :  resumes[0].education,
          "certifications" : resumes[0].certification
        }
        //console.log("genres",genRes)
        setPrintResume(genRes)
        setRunUse(false)
      }
    }
  })

  //ayyyy sync
  function promptWrapper(e){
    e.preventDefault()
    proompt(e)
  }
  async function proompt(e){
    //console.log(e.target[0].value)
    //setShowLoading(true)
    apiCall(printResume, e.target[0].value).then((response) => {
      console.log(response.data)
      //setShowLoading(false)
    })
  }

  return (
    <div>
      <CardGroup>
        <Card>
          <Form onSubmit={(e) => promptWrapper(e)}>
            <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Application information</Form.Label>
              <Form.Control name="application" as="textarea" rows={10} placeholder="Paste the job application here"/>
              <Button  type="submit">Generate</Button>
            </Form.Group>
          </Form>
        </Card>
        <FaSpinner />
        <Card><Printable
        resume={printResume}/></Card>
      </CardGroup>
      
    </div>
  )
}

export default Generator