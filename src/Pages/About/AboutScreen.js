import React from 'react';
import { Container, Image, Row,Content,Touch } from './AboutStyles';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Mypic from '../../Assets/Images/mypic.jpg';
import { Aboutme } from '../../Assets/Data/projects';
const About = ()=>{
    return(
        <Container> 
            <Header/>
              <Row> 
                <Image src={Mypic} alt="My Profile Picture"/>
                <Content dangerouslySetInnerHTML={{__html : Aboutme.content}}></Content>
              </Row>
               <Touch>
                  <h2>Get in touch</h2>
                  <p>For business inquiries and collaborations please contact me using the links in the footer. I am looking forward to hearing from you!</p>
                  </Touch>
            <Footer/>
        </Container>
    )
}
export default About;