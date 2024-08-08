import React, { useState, useEffect } from "react";
import ProjectItems from "./ProjectItems";

function ProjectsList(){

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/Projects")
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(error => (console.log(error)))
    }, []);

    function handleDelete(id){
        const newItems = projects.filter((project)=> project.id !== id);
        setProjects(newItems);
        fetch(`http://localhost:4000/Projects/${id}`,{
            method: 'DELETE'
        })
        .catch(error => (console.log(error)))
    }

    return (
        <div>
            {projects.map(project => (
                <ProjectItems 
                    key={project.id}
                    id = {project.id}
                    name ={project.name}
                    description ={project.description}
                    onDelete ={handleDelete}
                />
            ))}
        </div>
    )
}

export default ProjectsList;