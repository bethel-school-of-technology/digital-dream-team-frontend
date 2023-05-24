
import React, { useState } from "react";
import {  Card, Form, Button, CardGroup } from "react-bootstrap";
import Data from "./testObj/obj.json"
import Printable from "./generatorComponents/Printable";

function Generator(){
  let testResume = Data.example
  const [printResume, setPrintResume] = useState(testResume)
  

  //ayyyy sync
  async function proompt(e){

    console.log("not implemented")
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

      </CardGroup>
      <Printable
        resume={printResume}/>
    </div>
  )
}

export default Generator