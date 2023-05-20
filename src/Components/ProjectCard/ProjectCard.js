import React from 'react';
import { Container, Right, ScreenShot,Child, FirstCard, SecondCard, Date, Left,RowCard,Tag,Title, Desc,Role, Line } from './ProjectCardStyles';
import { projects } from '../../Assets/Data/projects';

const ProjectCard = ()=>
{
    return(
    <Container> 
    {projects.map(project => 
        {
        return(
        <>
         <Date> 
         {project.end_date}
         </Date>
         <Child>
         <Left>
         <ScreenShot src={project.url} alt={project.ProjectName}/>
         </Left>
         <Line/>
         <Right> 
         <FirstCard> 
          <Title> {project.ProjectName}
          </Title>
          <br/>
          <Desc>{project.Desc}</Desc>
          </FirstCard>
          <RowCard> 
            {project.Technologies.map(x=>
                {
                    return(
                        <Tag> 
                            {x}
                        </Tag>
                    )
                })}
          </RowCard>
          <SecondCard>
           <Role> Rahul Shaik - {project.Role}</Role>
          </SecondCard>
         </Right>
         </Child>
         </>);
        })}
    
    </Container>
    );
}
export default ProjectCard;