import React from 'react';
import { Container, ListItem, Navigation, NavigationList, Title ,Link} from "./FooterStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin, faInstagram, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import Resume from '../../Assets/Data/resume1.pdf';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Footer = ()=>
{
   return(
    <Container>
    <Title>
          &copy; 2023 &nbsp; Rahul Shaik
    </Title>
    <Navigation>
        <NavigationList>
        <ListItem> 
        <Link href={Resume} download>
          <div style={{display : 'flex',flexDirection:'row'}}>
          <FontAwesomeIcon icon={faDownload}/>
         <Title> Download Resume </Title>
        
         </div>
        </Link>
        </ListItem>
        <ListItem>
        <Link href="https://github.com/RahulShaik716">
        <FontAwesomeIcon icon={faGithub} />
        </Link>
        </ListItem>
        <ListItem> 
        <Link href="https://www.linkedin.com/in/dada-rahul-teja-shaik-523262128/">
        <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        </ListItem>
        <ListItem> 
        <Link href="https://www.instagram.com/iammroneshot/">
        <FontAwesomeIcon icon={faInstagram} />
        </Link>
        </ListItem>
        <ListItem> 
        <Link href="https://stackoverflow.com/users/21929230/rahul-shaik">
        <FontAwesomeIcon icon={faStackOverflow} />
        </Link>
        </ListItem>
       
        
        </NavigationList>
    </Navigation>
  </Container>
   )
}
export default Footer; 