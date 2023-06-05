import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useState, useEffect } from "react";
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

function LandingPageButton({
  buttonText,
  navigateTo,
  symbol = "+",
  children,
}) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{

  }, [])
 
  const createProfileAndNavigate = async () => {
    try {
      let result = await fetch("http://localhost:5000/api/v1/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await result.json();
      navigate(`${navigateTo}/${data.newProfile.uniqueId}`, { state: {profileId: data.newProfile.uniqueId} });
    } catch (err) {
      console.error(err);
      navigate(`/profile/ErrorCreatingProfile`);
    }
  };
  return (
    <Col
      onClick={createProfileAndNavigate}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className='landingPage__btn m-5'
      role='button'
    >
      <h1>{buttonText}</h1>
      {hover && <h1>{symbol}</h1>}
      {children}
    </Col>
  );
}

export default function App() {
  const [savedProfiles, setSavedProfiles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getExistingProfiles();
  }, []);
  const getExistingProfiles = () => {
    fetch("http://localhost:5000/api/v1/profile", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSavedProfiles(data.profiles);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  return (
    <>
      <Container fluid>
        <Row className='d-flex vh-100 text-center'>
          <LandingPageButton
            buttonText='Create New Profile'
            navigateTo='/profile'
          />
          <LandingPageButton
            symbol='->'
            buttonText='Use Existing Profile for New Resume'
            navigateTo='/profile'
          >
            {savedProfiles.map((profile) => {
              return (
                <Row onClick={(e)=>{ 
                  e.stopPropagation();
                  navigate(`/profile/${profile.uniqueId}`, { state: {profileId:profile.uniqueId}})
                }}
                key={profile._id}
                className='profile-listing'>
                  <Col>{profile.label}</Col>
                </Row>
              );
            })}
          </LandingPageButton>
        </Row>
      </Container>
    </>
  );
}
