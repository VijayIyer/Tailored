import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Button, Row, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewProject from './newProject.jsx';
import './index.css';
const Project = ({ data }) => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const profileId = location.state.profileId;
  const addItem = () =>{
    fetch(`http://localhost:5000/api/v1/projects/${profileId}`, {
      method:'POST',
      body:JSON.stringify({
        label:`Project # ${items.length}`,
        profileId:profileId  
      }),
      headers:{
        'content-type':'application/json'
      }

    })
    .then(res=>res.json())
    .then(data=>{
      setItems([...items, data.createdProject]);
    })
    .catch(err=>console.error(err))
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
  useEffect(()=>{
    if (data) setItems(data);
  }, [data])
  return (
    <Container className="text-center">
      <Row><h3>Projects</h3></Row>
      {items.map((item, index) =>{
        return (
          <Row>
            <NewProject id={item.id} key={item.id} 
            label={item.label}
            title={item.title}
            summary={item.summary}
            startDate={item.startDate}
            endDate={item.endDate}
            removeItem={removeItem} 
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
