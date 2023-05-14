import { useState } from "react";
import { InputTags } from "react-bootstrap-tagsinput";
import { WithContext as ReactTags } from 'react-tag-input';
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { FaSave } from 'react-icons/fa';
import "react-bootstrap-tagsinput/dist/index.css";
import './skills.css';
import './index.css';
const Skills = () => {
  const [state, setState] = useState([]);
  const [tags, setTags] = useState([]);
  const [savedSkills, setSavedSkills] = useState([]);
  const addSkills = () =>{
    setSavedSkills(state);
  }
   const handleAddition = (tag) => {
    console.log(tag);
    setTags([...tags, tag]);
  };
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };
  return (
    <Container fluid>
      <Row><h3>Skills</h3></Row>
      <Row>
        
        <Col>
          <ReactTags tags={tags} 
          handleAddition={handleAddition}
          handleDelete={handleDelete}
          placeholder="Add a skill"
          inputFieldPosition="bottom"
          editable />
        </Col>
        
      </Row>
      <Row>
              <Col>
                <Button onClick={addSkills} className="flex justify-content-flex-start mt-3" variant="outline-dark">
                  <FaSave />
                </Button>
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
