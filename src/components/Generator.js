
import React, { useState } from "react";
import {  Card, Form, Button, CardGroup } from "react-bootstrap";
import Data from "./testObj/obj.json"
import Printable from "./generatorComponents/Printable";

function Generator(){
  let testResume = Data.example
  const [printResume, setPrintResume] = useState(testResume)

  const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  //ayyyy sync
  async function proompt(e){

    console.log(process.env)

    let app = document.getElementsByName("application")[0].value
    if (app !== ""){
      try {
        /*
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `You are a professional resume writer and are working to choose what information to include on a resume.\nThe following is a job application :\n{${app}}\n\nand the information for a resume \n{${testResume}}\nout of this information what is most relevant to the job application. \nyou should always include at least 2 jobs, 2 projects, a degree and any relevent certifications. If there are fewer than required jobs, projects, degrees or certifications, leave blank those data.\noutput should be of the form {\n  \"identity\": { \"first\" : \"\", \"last\" : \"\", \"phone\" : \"\", \"title\" : \"\",\"email\" : \"\", \"linkedin\" : \"\"},\n  \"skills\" : [],\n  \"jobs\" : [ { \"title\" : \"\", \"company\": \"\", \"startdate\" : \"\", \"enddate\" : \"\",\"accomplishments\" : []}],\n  \"projects\" : [{ \"title\" : \"\", \"startdate\" : \"\", \"enddate\" : \"\",\"accomplishments\" : [] }],\n  \"educations\" : [{\"school\": \"\",\"degree\" : \"\", \"date\" : \"\"}],\n  \"certifications\" :[{ \"certification\" : \"\",\"provider\" : \"\",\"date\" : \"\"}]\n}\n`,
          temperature: 0.13,
          max_tokens: 995,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0.6,
          stop: [" Human:", " AI:"],
        }).then(
          (response) =>{
            console.log(response)
          setPrintResume(response)
          }
        )*/
      } catch(err){
        console.log(err)
      }
      
    }
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

      </CardGroup>
      <Printable
        resume={printResume}/>
    </div>
  )
}

export default Generator