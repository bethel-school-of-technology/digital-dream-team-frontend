
import React, { useState } from "react";
import {  Card, Form, Button, CardGroup } from "react-bootstrap";
import Data from "./testObj/obj.json"
import Printable from "./generatorComponents/Printable";

function Generator(){
  let testResume = Data.example
  const [printResume, setPrintResume] = useState(testResume)
  
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "blah",
  });

  const openai = new OpenAIApi(configuration);
  //ayyyy sync
  async function proompt(e){

    let app = document.getElementsByName("application")[0].value
    
    console.log("this is very dangerous")
    e.preventDefault()
  }

  return (
    <div>
      <CardGroup>
        <Card>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Application information</Form.Label>
              <Form.Control name="application" as="textarea" rows={10} placeholder="Paste the job application here"/>
              <Button onClick={(e) => proompt(e)} type="button">Generate</Button>
            </Form.Group>
          </Form>
        </Card>
        <Card><Printable
        resume={printResume}/></Card>
      </CardGroup>
      
    </div>
  )
}

export default Generator