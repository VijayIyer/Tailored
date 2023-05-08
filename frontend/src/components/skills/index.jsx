import { useState } from "react";
import { InputTags } from "react-bootstrap-tagsinput";
import { Button } from "react-bootstrap";
import "react-bootstrap-tagsinput/dist/index.css";
const Skills = () => {
  const [state, setState] = useState([]);
  return (
    <div className='d-flex flex-column gap-2'>
      <h1>Add Skills</h1>
      <InputTags values={state} onTags={(value) => setState(value.values)} />
      <Button variant='outline-dark'>+ Add Skills</Button>
    </div>
  );
};
export default Skills;
