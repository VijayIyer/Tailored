import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

function LandingPageButton({ buttonText, navigateTo, callbackFn}){
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (
    
      <Col onClick={async ()=>{
        let profileId = await callbackFn();
        console.log(profileId);
        navigate(`${navigateTo}/${profileId}`, {state:{profileId:profileId}});
      }} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className='landingPage__btn m-5' role='button'>
            
              <h1>{buttonText}</h1>
              {hover && <h1>+</h1>}
            
          </Col>
    )
}

export default function App() {
  
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
          <LandingPageButton buttonText='Use Existing Profile for New Resume' />
        </Row>
      </Container>
      
      </>
    )
}