import styled from "styled-components";

export const Container = styled.div`
height : 100vh;
`;

export const VideoBackground = styled.video
`

position : absolute;
top:0;
left : 0;
bottom : 0;
width: 100vw;
height: 100vh;
object-fit : cover; 
overflow : hidden;
`;

export const Content = styled.div
`
position : relative;
z-index : 1;
color : white;
height : 100vh;
width : auto;
display : flex;  
justify-content : center;
flex-direction : column;
`;

export const Name = styled.label
`
letter-spacing : 0.5em;
font-weight : 1000;
font-size : 2em;
text-transform : uppercase;
margin-left : 2em;
line-height : 1.5em;
white-space : pre-wrap;
`;

export const Role = styled.label`
margin-top : 1.5em;
font-size : 0.6em;
margin-left : 6.4em;
line-height : 1.5em;    
`;

export const Explore = styled.button`
  font-size : 0.6em;
  max-width : 8em;
  margin-left : 6.4em;
  padding : 0.8em;
  margin-top : 2em;
  background-color : #ffd8b1;
  border: none;
  border-radius: 0.25em;
  box-shadow: 0.15em 0.15em 0.25em rgba(f, d, b, 0.4);
  font-weight : bold;

  &:hover {
     background-color : #6392C8;
  }
`;