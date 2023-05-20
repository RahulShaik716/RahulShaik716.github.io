import styled from 'styled-components';

export const Container = styled.div
`
display: flex;
flex-direction: column;
margin-bottom : 2em;
`
export const ScreenShot = styled.img
`
height : 15em; 
width : 10em;
object-fit : contain;
margin-top : 1em;
`;
export const Child = styled.div
`
display : flex; 
flex-direction : row;
`
export const Right = styled.div
`
display : flex;
flex-direction : column;
flex-basis : 50%;
background-color : #fff;
justify-content : center;
margin-left : 1em;
  
`;

export const Line = styled.hr`
display : flex; 
flex-direction :column;
justify-content : space-between;
width : 0em;
overflow : visible;
&:before {
  content: "•";
  margin-left : -0.2em;
  margin-top : -0.7em;
}
&:after
{
  content: "•";
  margin-left : -0.2em;
  margin-bottom : -0.7em;
`;


export const FirstCard = styled.div
`
  background-color : #f5f5f5;
  width : 20em;
  height : 6em;
  padding : 1em;
`;
export const SecondCard = styled.div
`width : 15em; 
`;

export const Left = styled.div
`
 display : flex; 
 flex-basis : 50%; 
 justify-content : center;
`;
export const RowCard = styled.div
`
display : flex; 
margin-top : 0.5em;
`;

export const Tag = styled.div
`
  display: inline-block;
  background-color: #e0e0e0;
  color: #3A2E2E;
  padding: 0.25em 0.5em;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 0.25em;
  font-size : 0.7em;

`;
export const Title = styled.div
`
font-size : 1em; 
font-weight : bold; 
color : #000080
`;
export const Desc = styled.p
`
font-size : 0.7em;
color:#333;
`;
export const Role = styled.label
`
font-size : 0.5em; 
color :#36454F ;
`;
export const Date = styled.div
`
  display: flex;
  justify-content : center;
  align-self : center;
  background-color: #333;
  color: #fff;
  padding: 0.4em 0.8em;
  border-radius: 0.4em;
  max-width : 10em;
  margin-top : 0.5em;
  font-size :  1em;
`;