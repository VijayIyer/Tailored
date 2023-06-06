import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Button, Row, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewExperience from './newExperience.jsx';
import './index.css';
const Experience = ({ data }) => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const profileId = location.state.profileId;
  const addItem = () =>{
    fetch(`http://localhost:5000/api/v1/experience`, {
      method:'POST',
      body:JSON.stringify({
        label:`Experience # ${items.length}`,
        profileId:profileId  
      }),
      headers:{
        'content-type':'application/json'
      }

    })
    .then(res=>{
      if (res.ok) return res.json();
      throw new Error('error adding experience');
    })
    .then(data=>{
      setItems([...items, data.createdExperience]);
    })
    .catch(err=>console.error(err))
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
  useEffect(()=>{
    if(data) setItems(data);
  }, [data])
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
