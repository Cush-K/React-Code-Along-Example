import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ProjectsList from "../Components/ProjectsList";

function Home(){
    return(
    <>
        <Navbar />
        <Hero />
        <ProjectsList />
    </>
    )
}

export default Home;