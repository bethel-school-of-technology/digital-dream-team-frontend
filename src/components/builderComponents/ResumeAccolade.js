import React, {useState} from "react";
import { Container, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function ResumeAccolade(props) {
  let accolades = props.accolades

  function listAccolades(){
    return accolades.map(accolade =>{
      <ListGroupItem>
        <p>test accolade</p>
      </ListGroupItem>
    })
  }
  return (
      <div>
        <ListGroup>
        {listAccolades()}
        </ListGroup>
    </div>
  )
}

export default ResumeAccolade;