import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Projects";


function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Project />
            <Skills />
        </div>
    )
};

export default Home