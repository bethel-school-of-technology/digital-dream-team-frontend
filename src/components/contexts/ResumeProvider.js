import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ResumeContext from "./ResumeContext";
import UserContext from "./UserContext";

export const ResumeProvider = (props) => {

    const [ resumes, setResumes ] = useState([]);
    const baseUrl = "http://localhost:3001/api/resume/";
    let { isSignedIn } = useContext(UserContext);

    useEffect(() => {
        async function fetchData() {
            await getAllResumes();
        }
        if (isSignedIn) {
            fetchData();
        }
    }, [isSignedIn]);

    function getAllResumes() {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };

        return axios.get(baseUrl, { headers: myHeaders }).then(response => setResumes(response.data));
    }

    function getResume(id) {
        return resumes.find(resume => resume._id === id)
    }

    function addResume(resume) {        
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };
    
        return axios.post(baseUrl, resume, { headers: myHeaders })
            .then(response => {
                getAllResumes();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function editResume(resume) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };

        return axios.put(`${baseUrl}${resume._id}`, resume, {headers: myHeaders})
        .then(response => {
          getAllResumes()
          return new Promise((resolve) => resolve(response.data))
        })
    }

    function deleteResume(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };

        axios.delete(`${baseUrl}${id}`, {headers: myHeaders})
        .then(getAllResumes)
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <ResumeContext.Provider value={{
            resumes,
            getResume,
            addResume,
            editResume,
            deleteResume
        }}>
            { props.children }
        </ResumeContext.Provider>
    )
};