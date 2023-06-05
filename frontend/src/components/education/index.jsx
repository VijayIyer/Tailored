import { Container, Row, Form, Button, FloatingLabel } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NewEducation from './newEducation';
import './index.css';
const Education = ({ data }) => {
  const location = useLocation();
  const profileId = location.state.profileId;
  const [items, setItems] = useState([]);
  const addItem = () =>{
    let newItem;
    fetch('http://localhost:5000/api/v1/education', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({
        profileId:profileId
      })
    })
    .then(res => res.json())
    .then(data => {
      newItem = {
        id: data.id,
        label:`Education # ${items.length}`,
        institution:null, 
        major:null,
        startDate:null,
        endDate:null, 
        degreeName:null,
      };
      setItems([...items, newItem]);  
    })
    .catch(err=>console.error(err))
  }
  const removeItem = (id) =>{
    fetch(`http://localhost:5000/api/v1/education/${id}`, {
      method:'DELETE',
      headers:{
        'content-type':'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      let newItems = items.filter(item => item.id !== id);
      setItems(newItems);  
    })
    .catch(err=>console.error(err))
  }
  const getItems = ()=>{
    fetch('http://localhost:5000/api/v1/education', {
      method:'GET',
      headers:{
        'content-type':'application/json'
      }
    })
  }
  const modifyItemLabel = (id, label)=>{
    console.log(`field changed:${label}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).label = label;
    }
    setItems(newItems);
  };
  const modifyInstitution = (id, institution)=>{
    console.log(`field changed:${institution}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).institution = institution;
    }
    setItems(newItems);
  };
  const modifyDegree = (id, degreeName)=>{
    console.log(`field changed:${degreeName}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).degreeName = degreeName;
    }
    setItems(newItems);
  };
  const modifyMajor = (id, major)=>{
    console.log(`field changed:${major}`);
    let newItems = [...items];
    if(newItems.find(item=>item.id===id)){
      newItems.find(item=>item.id===id).major = major;
    }
    console.log(newItems);
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
    console.log(`education data - ${JSON.stringify(data)}`);
    setItems(data);
  }, [data]);
  return (
    <Container className="text-center">
      <Row><h3>Education</h3></Row>
      {items.map((item, index) =>{
        return (
          <Row key={item._id}>
            <NewEducation id={item.id} key={item.id} 
              removeItem={()=>removeItem(item.id)}
              major={item.major}
              degreeName={item.degreeName}
              institution={item.institution}
              startDate={item.startDate}
              endDate={item.endDate}
              label={item.label}
              modifyItemLabel={modifyItemLabel} 
              modifyMajor={modifyMajor}
              modifyInstitution={modifyInstitution}
              modifyDegree={modifyDegree}
              modifyStartDate={modifyStartDate}
              modifyEndDate={modifyEndDate}
              />
        </Row>)
      })}
      <Row>
        <div role="button" onClick={addItem} className="education__addbtn">+ Add Education</div>
      </Row>
    </Container>
  );
};
export default Education;
