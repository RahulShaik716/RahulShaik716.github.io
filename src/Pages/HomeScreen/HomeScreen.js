import React from 'react';
import {Container,Content,VideoBackground,Name, Role, Explore} from './HomeStyles';
import backgroundVideo from "../../Assets/Video/background.mp4";
import { useNavigate } from 'react-router-dom';
const HomeScreen = ()=>
{
    const navigate = useNavigate();
    return(
        <Container>
            <VideoBackground id="background-video" autoPlay muted loop> 
              <source src={backgroundVideo} type="video/mp4"/>
              Your browser doesn't support video tag
            </VideoBackground>
            <Content>
                 <Name>Rahul <br/>Shaik</Name>
                 <Role>
                    Problem Solver <br/>
                    Ex - Full Stack Developer @Shell <br/>
                    MCS @ ASU (Tempe, US) <br/> 
                 </Role>
                 <Explore onClick={()=>navigate('/details')}>
                     Know More
                 </Explore>
            </Content>
        </Container>
    )
}
export default HomeScreen;