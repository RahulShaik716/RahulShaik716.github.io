import React from "react";
import { Container, ListItem, Navigation, NavigationList, Title } from "./HeaderStyles";
import { useNavigate } from "react-router-dom";

const Header = ()=>{
  const navigate = useNavigate();
    return(
      <Container>
        <Title onClick={()=>navigate('/')}>
            Dada Rahul Teja <br/>
            Shaik
        </Title>
        <Navigation>
            <NavigationList>
            <ListItem onClick={()=>navigate('/details')}>
                Projects
            </ListItem>
            <ListItem onClick={()=>navigate('/about')}> 
                 About
            </ListItem>
            </NavigationList>
        </Navigation>
      </Container>
    )
}
export default Header; 