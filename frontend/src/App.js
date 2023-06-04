import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

function LandingPageButton({ buttonText, navigateTo, callbackFn, symbol='+'}){
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const getProfileAndNavigate = async ()=>{
      let profileId = await callbackFn();
      if(profileId) 
        navigate(`${navigateTo}/${profileId}`, {state:{profileId:profileId}});
      else navigate('/');
  }
  return (
    
      <Col onClick={getProfileAndNavigate} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className='landingPage__btn m-5' role='button'>
            
              <h1>{buttonText}</h1>
              {hover && <h1>{symbol}</h1>}
            
          </Col>
    )
}

export default function App() {
  
  const getExistingProfiles = async () =>{
    try{
      let result = await fetch('http://localhost:5000/api/v1/profile', {
        method:'GET',
        headers:{
          'content-type':'application/json'
        }
      });
      let data = await result.json();
      return data.profiles[0]._id;
    }
    catch(err){
      console.error(err);
      return null;
    }
  }
  const createNewProfile = async ()=>{
    try{
      let result = await fetch('http://localhost:5000/api/v1/profile', {
        method:'POST',
        body:JSON.stringify({
        label:'Profile'
        }),
          headers: {
        "Content-Type": "application/json",
        },
      })
      let data = await result.json();
      console.log(data.id);
      return data.id;
    }
    catch(err) {
      console.error(err);
      return null;
    }
    
  }
  return (
    <>
      <Container fluid>
        <Row className='d-flex vh-100 text-center'>
          <LandingPageButton buttonText='Create New Profile' navigateTo='/profile' callbackFn={createNewProfile}/>
          <LandingPageButton symbol="->" buttonText='Use Existing Profile for New Resume' navigateTo='/profile' callbackFn={getExistingProfiles}/>
        </Row>
      </Container>
      
      </>
    )
}