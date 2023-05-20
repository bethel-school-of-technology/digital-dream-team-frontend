
import React, { useState } from "react";
import { Container, Row, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card, Form, Button, Col, CardGroup } from "react-bootstrap";
import Data from "./testObj/obj.json"
import Printable from "./generatorComponents/Printable";

function Generator(){
  let testResume = Data.example
  return (
    <div>
      <CardGroup>
        <Card>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Application information</Form.Label>
              <Form.Control as="textarea" rows={10} placeholder="Paste the job application here"/>
              <Button>Generate</Button>
            </Form.Group>
          </Form>
        </Card>
        <Card><Printable
        resume={testResume}/></Card>
      </CardGroup>
      
    </div>
  )
}

export default Generator