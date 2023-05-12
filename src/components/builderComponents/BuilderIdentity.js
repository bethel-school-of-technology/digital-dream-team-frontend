import React from "react";
import { Container, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card, Row, Col, Form } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function BuilderIdentity() {
  /*
  "identity": {
    "first" : "",
    "last" : "",
    "address" : "",
    "phone" : "",
    "email" : "",
    "portfolioSite" : "",
    "linkedIn" : ""
  } */
  function identityInfo(title){
    return <Card.Body>
      <Form>
        <Form.Group as={Row} className="mb-3" >
          <Col><Form.Text  sm={2}>{title}</Form.Text></Col>
          <Col sm={8}>
            <Form.Control/>
          </Col>
        </Form.Group>
      </Form>
    </Card.Body>
  }

    return (
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group as={Row} className="mb-3" >
                    <Col><Form.Text  sm={2}>{"First Name"}</Form.Text></Col>
                    <Col sm={8}>
                      <Form.Control/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" >
                    <Col><Form.Text  sm={2}>{"Last Name"}</Form.Text></Col>
                    <Col sm={8}>
                      <Form.Control/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" >
                    <Col><Form.Text  sm={2}>{"Title"}</Form.Text></Col>
                    <Col sm={8}>
                      <Form.Control/>
                    </Col>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>{identityInfo("Address")}</Card>
            <Card>{identityInfo("Phone")}</Card>
            <Card>{identityInfo("Email")}</Card>
            <Card>{identityInfo("LinkedIn")}</Card>
          </Col>
        </Row>
    )
}

export default BuilderIdentity;

/**
 <ListGroup>
            <ListGroupItem>{identityInfo("Address")}</ListGroupItem>
            <ListGroupItem>{identityInfo("Phone")}</ListGroupItem>
            <ListGroupItem>{identityInfo("Email")}</ListGroupItem>
            <ListGroupItem>{identityInfo("LinkedIn")}</ListGroupItem>
          </ListGroup>
 */