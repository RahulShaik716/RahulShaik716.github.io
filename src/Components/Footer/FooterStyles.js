import styled from "styled-components";

export const Container = styled.div`
position : fixed; 
bottom : 0;
right : 0;
left : 0;
display : flex; 
flex-direction : row;
height : 1em;
justify-content : space-between;
padding-top : 1em; 
padding-bottom : 0.5em;
background-color : #f5f5f5;
bottom : 0;
`;

export const Title = styled.div`
font-size : 0.6em; 
text-align : center;
margin-left : 1em;
`;

export const Navigation = styled.nav`
  margin-right : 0.4em;
`;

export const NavigationList = styled.div
`
display : flex; 
flex-direction : row; 
`

export const ListItem = styled.div
`  
   margin-right : 1em;
   cursor : pointer;
`;

export const Link = styled.a`

`;