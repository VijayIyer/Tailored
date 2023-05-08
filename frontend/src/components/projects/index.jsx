import { useState } from 'react';
import { Button, Container, Row, Form, FloatingLabel } from 'react-bootstrap';
import './index.css';
import NewProject from './newProject'
const Projects = () => {
  const [projects, setProjects] = useState(0);
  const addProject = () =>{
    setProjects(project => project + 1);
  }
  return (
    <Container>
      <Row><h3>Projects</h3></Row>
      {[...Array(projects)].map(experience =>{
        return <Row><NewProject /></Row>
      })}
      <Row><div onClick={addProject} className="item__placeholder" role="button">+ Add Project</div></Row>
    </Container>
    )
};
export default Projects;
