
import React, { useState } from "react";
import { Container, Row, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card, Form, Button, Col, CardGroup } from "react-bootstrap";
import "../../css/Printable.css"
function Printable(props){
  let resume = props.resume
  let identity = resume.identity
  let skills = resume.skills
  let jobs = resume.jobs
  let projects = resume.projects
  let educations = resume.educations
  let certs = resume.certifications
  
  function myHeader(){
    return (
    <div style={{textAlign: "center"}}>
      <div>{identity.first} {identity.last}</div>
      <div>{identity.title}</div>
      <div> {identity.email} | {identity.phone} | {identity.linkedin}</div>
    </div>)
  }
  function mapSkills(){
    return skills.map(skill => {
      return(<li style={{display: "inline"}}> | {skill}</li>
      )
    })
  }
  function mapJobs(){
    return jobs.map(job => {
      return(
        <div>
          <div>
            {job.title} | {job.company}
            <div>
              {job.startdate} {job.enddate}
            </div>
          </div>
          <ul>{mapBullets(job)}</ul>
        </div>
      )
    })
  }
  function mapProjects(){
    return projects.map(proj => {
      return(
        <div>
          <div>
            {proj.title} 
            <div>
              {proj.startdate} {proj.enddate}
            </div>
          </div>
          <ul>{mapBullets(proj)}</ul>
        </div>
      )
    })
  }
  function mapEducation(){
    return educations.map(edu =>{
      return (
        <div>
          {edu.degree} {edu.school} {edu.date}
        </div>
      )
    })
  }
  function mapCertifications(){
    return certs.map(c =>{
      return (
        <div>
          {c.certification} {c.provider} {c.date}
        </div>
      )
    })
  }

  function mapBullets(item){
    return item.accomplishments.map(accom =>{
      return( <li>{accom}</li>)
    })
  }
  return (
    <div contentEditable="true">
      {myHeader()}
      <h5>Skills</h5>
      <ul >{mapSkills()}</ul>
      <h5>Professional Experience</h5>
      <div>{mapJobs()}</div>
      <h5>Technical Experience</h5>
      <div>{mapProjects()}</div>
      <h5>Education</h5>
      <div>{mapEducation()}</div>
      <h5>Certifications</h5>
      <div>{mapCertifications()}</div>
    </div>
  )
}

export default Printable