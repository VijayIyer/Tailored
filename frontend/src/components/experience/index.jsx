import { useState } from 'react';
import { Container, Button, Row, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewExperience from './newExperience.jsx';
import './index.css';
const Experience = () => {
  const [experiences, setExperiences] = useState(0)
  const addExperience = () =>{
    console.log(`adding new experience!`);
    setExperiences(experiences => experiences + 1);
  }
  return (
    <Container className="text-center">
      <Row><h3>Experience</h3></Row>
      {[...Array(experiences)].map((item, index) =>{
        return <Row><NewExperience headerArgument={`Experience #${index}`} /></Row>
      })}
      <Row>
        <div role="button" onClick={addExperience} className="item__placeholder">+ Add Experience</div>
      </Row>
    </Container>
  );
};
export default Experience;
