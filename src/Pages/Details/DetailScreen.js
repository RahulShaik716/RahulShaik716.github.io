import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container, MiddleContainer } from "./DetailStyles";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
const DetailScreen = ()=>
{
    return(
        <Container>
           <Header/>
           <ProjectCard/>
           <Footer/>
        </Container>
    )
}
export default DetailScreen;