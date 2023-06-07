

import React from "react";
import {Button } from "react-bootstrap";
import "../../css/Printable.css"

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Printable(props){
  let resume = props.resume
  let identity = resume.identity
  let skills = resume.skills
  let jobs = resume.jobs
  let projects = resume.projects
  let educations = resume.educations
  let certs = resume.certifications
  let pStyle = { fontWeight:"bold"}
  let letter = [612,791]
  function printDocument() {
    let jsPdf = new jsPDF('p', 'pt', 'letter');
        var htmlElement = document.getElementById('divToPrint');
        
        
        // you need to load html2canvas (and dompurify if you pass a string to html)
        const opt = {
            callback: function (jsPdf) {
                jsPdf.save("Test.pdf");
                // to open the generated PDF in browser window
                // window.open(jsPdf.output('bloburl'));
            },
            margin: [72, 72, 72, 72],
            autoPaging: 'text',
            format: "letter",
            html2canvas: {
                allowTaint: true,
                dpi: 300,
                letterRendering: true,
                logging: false
            }
        };
    
        jsPdf.html(htmlElement, opt);
    
  }

  function printHTML(e){
    printDocument()
    e.preventDefault()
  }


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
   <div style={{
    width: "77.274%",
    height: "100%",
    fontSize: "0.5vw"
  }}>
    <Button onClick={(e) => printHTML(e)}>Print</Button>
    <div id="divToPrint" >
     <div contentEditable="true">
      {myHeader()}
      <p style={pStyle}>Skills</p>
      <ul >{mapSkills()}</ul>
      <p style={pStyle}>Professional Experience</p>
      <div>{mapJobs()}</div>
      <p style={pStyle}>Technical Experience</p>
      <div>{mapProjects()}</div>
      <p style={pStyle}>Education</p>
      <div>{mapEducation()}</div>
      <p style={pStyle}>Certifications</p>
      <div>{mapCertifications()}</div>
    </div>
   </div>
   </div>
  )
}

export default Printable