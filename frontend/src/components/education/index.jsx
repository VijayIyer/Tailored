import { Container, Row, Form, Button, FloatingLabel } from "react-bootstrap";
import { useState } from 'react';
import NewEducation from './newEducation';
import './index.css';
const Education = () => {
  const [education, setEducation] = useState(0)
  const addEducation = () =>{
    console.log(`adding new education!`);
    setEducation(education => education + 1);
  }
  return (
    <Container className="text-center">
      <Row><h3>Education</h3></Row>
      {[...Array(education)].map((education, index) =>{
        return <Row><NewEducation headerArgument={`Education #${index}`} /></Row>
      })}
      <Row>
        <div role="button" onClick={addEducation} className="education__addbtn">+ Add Education</div>
      </Row>
    </Container>
  );
};
export default Education;
