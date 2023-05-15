import { useState } from 'react';
import { Container, Button, Row, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewProject from './newProject.jsx';
import './index.css';
const Project = () => {
  const [items, setItems] = useState([]);
  const addItem = () =>{
    let newItem = {
      id:items.length, 
      label:`Project # ${items.length}`,
      title:null,
      startDate:null, 
      endDate:null, 
      summary:null
    }
    setItems([...items, newItem]);
  }
  const removeItem = (id) =>{
    let newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }
  const modifyLabel = (id, newLabel)=>{
    console.log(`field changed:${newLabel}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).label = newLabel;
    }
    setItems(newItems);
  };
  const modifyTitle = (id, newTitle)=>{
    console.log(`field changed:${newTitle}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).title = newTitle;
    }
    setItems(newItems);
  };
  const modifySummary = (id, summary)=>{
    console.log(`field changed:${summary}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).summary = summary;
    }
    setItems(newItems);
  };
  const modifyStartDate = (id, startDate)=>{
    console.log(`field changed:${startDate}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).startDate = startDate;
    }
    setItems(newItems);
  };
  const modifyEndDate = (id, endDate)=>{
    console.log(`field changed:${endDate}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).endDate = endDate;
    }
    setItems(newItems);
  };
  return (
    <Container className="text-center">
      <Row><h3>Projects</h3></Row>
      {items.map((item, index) =>{
        return (
          <Row>
            <NewProject id={item.id} key={item.id} 
            removeItem={removeItem} 
            headerArgument={item.label}
            modifyLabel={modifyLabel}
            modifyTitle={modifyTitle}
            modifySummary={modifySummary}
            modifyStartDate={modifyStartDate}
            modifyEndDate={modifyEndDate} />
          </Row>
      )})}
      <Row>
        <div role="button" onClick={addItem} className="item__placeholder">+ Add Project</div>
      </Row>
    </Container>
  );
};
export default Project;
