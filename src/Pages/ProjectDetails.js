import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectDetails(){

    const {id} = useParams()

    const [project, setProject] = useState();

    useEffect(()=>{
        fetch(`http://localhost:4000/Projects/${id}`)
        .then(res => res.json())
        .then(data => setProject(data))
        .catch(error => (console.log(error)))
    }, [id]);

    
    return (
       <>
        <h1>The ID for this detail is {id}</h1>
        <p>Name: {project?.name}</p>
        <p>Description: {project?.description}</p>
        <p>Technologies: {project?.technologies.map((technology)=>{
            return <h3 key ={project.id} > {technology} </h3>
        }
        )}</p>
        <p></p>
       </>
        
    )
}

export default ProjectDetails;