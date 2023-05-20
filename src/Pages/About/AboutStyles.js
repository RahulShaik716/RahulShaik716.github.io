import styled from 'styled-components';

export const Container = styled.div
`
display : flex; 
flex-direction : column; 
`

export const Row = styled.div`
display  : flex; 
flex-direction : row; 
justify-content : center; 
margin-top : 3.5em;
`;

export const Image = styled.img
`
width : 10em; 
height : 11em; 
object-fit: contain; 
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease;
background-color: #f1f1f1;
&:hover
{
    transform: scale(1.1); 
}
padding : 1em;
`;

export const Content = styled.div`
max-width : 35em; 
max-height : 15em; 
overflow-y : scroll;
background-color : #f5f5f5;
font-size : 0.7em; 
letter-spacing : 0.1em;
padding : 2em;
margin-left : 1em;

`;
export const Touch = styled.div`
font-size : 0.6em; 
display : flex; 
flex-direction : column; 
align-self : center;
margin-top : 1em; 
background-color : #f5f5f5;
width : 40em;
padding-left : 2em;
padding-right : 2em;
margin-left : 20em;
letter-spacing : 0.1em;
`;