import { useState } from 'react';
import { Container, Button, Row, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewExperience from './newExperience.jsx';
import './index.css';
const Experience = () => {
  const [experiences, setExperiences] = useState(0)
  const companyNames = ['Microsoft', 'Facebook', 'Netflix', 'Amazon', 'Apple', 'Google']
  const addExperience = () =>{
    console.log(`adding new experience!`);
    setExperiences(experiences => experiences + 1);
  }
  return (
    <Container>
      <Row><h3>Experiences</h3></Row>
      {[...Array(experiences)].map(experience =>{
        return <Row><NewExperience companyNames={companyNames}/></Row>
      })}
      <Row><div onClick={addExperience} className="item__placeholder" role="button">+ Add Experience</div></Row>
    </Container>
  );
};
export default Experience;
