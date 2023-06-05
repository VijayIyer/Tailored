import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { InputTags } from "react-bootstrap-tagsinput";
import { WithContext as ReactTags } from 'react-tag-input';
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { FaSave } from 'react-icons/fa';
import "react-bootstrap-tagsinput/dist/index.css";
import './skills.css';
import './index.css';
const Skills = ({ data }) => {
  const [state, setState] = useState([]);
  const [tags, setTags] = useState([]);
  const location = useLocation();
  const profileId = location.state.profileId;
  const [savedSkills, setSavedSkills] = useState([]);
  const addSkills = () =>{
    fetch(`http://localhost:5000/api/v1/skills/${profileId}`, {
      method:'POST',
      body:JSON.stringify({skills: tags} ),
      headers:{
        'content-type':'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>setSavedSkills(data.skills))
    .catch(err=>console.error(err))
  }
   const handleAddition = (tag) => {
    console.log(tag);
    setTags([...tags, tag]);
  };
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };
  useEffect(()=>{
    console.log(`saved skill data is  - ${data}`);
    if(data) setSavedSkills(data);
  }, [data])
  useEffect(()=>{
    setTags(savedSkills.map((skill)=>{
      return ({
        id:skill, 
        text:skill
      })
    }))
  }, [savedSkills]);
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
