import { useState } from "react";
import { InputTags } from "react-bootstrap-tagsinput";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "react-bootstrap-tagsinput/dist/index.css";
import './index.css';
const Skills = () => {
  const [state, setState] = useState([]);
  const [savedSkills, setSavedSkills] = useState([]);
  const addSkills = () =>{
    setSavedSkills(state);
  }
  return (
    <Container fluid>
      <Row><h3>Skills</h3></Row>
      <Row>
        <Col md={10} xs={10}><InputTags values={state} onTags={(value) => setState(value.values)} /></Col>
        <Col>
          <div role="button" className="skills__save p-1 text-center" onClick={addSkills}>Save</div>
        </Col>
      </Row>
      <Row>
      <ListGroup horizontal>
        {savedSkills.map((item, index) => (
          <ListGroup.Item key={item + index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
      </Row>
    </Container>
  );
};
export default Skills;
