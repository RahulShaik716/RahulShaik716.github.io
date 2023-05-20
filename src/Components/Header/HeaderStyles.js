import styled from "styled-components";

export const Container = styled.div`
position : fixed; 
top : 0; 
left:0; 
right : 0;
display : flex; 
flex-direction : row;
height : 2em;
justify-content : space-between;
padding-top : 1em; 
padding-bottom : 0.5em;
background-color : #f5f5f5;
`;

export const Title = styled.div`
font-size : 0.7em; 
text-transform : uppercase; 
text-align : center;
margin-left : 2em;
letter-spacing : 0.3em;
cursor : pointer;

`;

export const Navigation = styled.nav`

`;

export const NavigationList = styled.div
`
display : flex; 
flex-direction : row; 
`

export const ListItem = styled.label
`
   border-top : 1px solid black;
   padding-right : 4em;
   padding-left : 4em;
   padding-top : 1em;
   margin-right : 1em;
   font-size : 0.6em;
   cursor : pointer;
   &:hover {
    border-top : 0.2em solid brown;
   }
`;