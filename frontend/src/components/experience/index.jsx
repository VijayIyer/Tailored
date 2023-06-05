import { useState } from 'react';
import { Container, Button, Row, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewExperience from './newExperience.jsx';
import './index.css';
const Experience = ({ data }) => {
  const [items, setItems] = useState([]);
  const addItem = () =>{
    let newItem = {
      id:items.length,
      label:`Experience # ${items.length}`,
      companyName:null, 
      jobTitle:null,
      startDate:null,
      endDate:null, 
      summary:null,
    }
    setItems([...items, newItem]);
  }
   const removeItem = (id) =>{
    let newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }
    const modifyItemLabel = (id, label)=>{
    console.log(`field changed:${label}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).label = label;
    }
    setItems(newItems);
  };
  const modifyCompanyName = (id, companyName)=>{
    console.log(`field changed:${companyName}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).companyName = companyName;
    }
    setItems(newItems);
  };
  const modifyJobTitle = (id, jobTitle)=>{
    console.log(`field changed:${jobTitle}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).jobTitle = jobTitle;
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
      <Row><h3>Experience</h3></Row>
      {items.map((item, index) =>{
        return (
          <Row>
            <NewExperience id={item.id} key={item.id} 
              removeItem={()=>removeItem(item.id)}
              label={item.label}
              companyName={item.companyName}
              jobTitle={item.jobTitle}
              summary={item.summary}
              startDate={item.startDate}
              endDate={item.endDate}
              modifyItemLabel={modifyItemLabel} 
              modifyCompanyName={modifyCompanyName}
              modifyJobTitle={modifyJobTitle}
              modifySummary={modifySummary}
              modifyStartDate={modifyStartDate}
              modifyEndDate={modifyEndDate}
              />
          </Row>)
      })}
      <Row>
        <div role="button" onClick={addItem} className="item__placeholder">+ Add Experience</div>
      </Row>
    </Container>
  );
};
export default Experience;
