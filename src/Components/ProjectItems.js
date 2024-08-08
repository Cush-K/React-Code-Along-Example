import React from "react";
import { Link } from "react-router-dom";


function ProjectItems({ id, name, description, onDelete }){
       return(
        <div className="border">
            <p>Name: {name}</p>
            <p>Description: {description}</p>

            <button onClick={()=> onDelete(id)}>Delete</button>
            <Link to={`/projects/${id}`}>View</Link>
        </div>
    )
}

export default ProjectItems;