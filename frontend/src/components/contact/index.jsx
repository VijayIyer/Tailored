import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import {
  Container,
  Form,
  Row,
  Col,
  InputGroup,
  Button,
  Accordion,
} from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import Field from "../utils/field";
import "./index.css";
const Contact = ({ data }) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [location, setLocation] = useState(null);
  const locationHook = useLocation();
  const onSaveClick = async (e) => {
    e.preventDefault();
    if(id){
      fetch(`http://localhost:5000/api/v1/contact/${id}`, {
        method:'POST',
        body:JSON.stringify({
          name:name, 
          email:email, 
          phone:phone, 
          location:location
        }),
        headers:{
          "content-type":"application/json"
        }
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
      .catch(err=>console.error(err))
    }
  };
  
  const createContactInfo = async () =>{
    console.log(`creating new contact`);
    let result;
    let profileId = locationHook.state.profileId;
    result = await fetch('http://localhost:5000/api/v1/contact', {
          method:'POST',
          "headers":{
            "content-type":"application/json"
          },
          body:JSON.stringify({
            "profileId": locationHook.state.profileId
          })
        });
      
    let data = await result.json();
    const { _id, name, location, email, phone } = data.newContact;
    setId(_id);
    setName(name);
    setLocation(location);
    setPhone(phone);
    setEmail(email); 
  }
  useEffect(()=>{
    if(!data) createContactInfo();
    else{
      const { _id, name, location, email, phone } = data;
      console.log(`saved contact details - ${JSON.stringify(data)}`);
      setId(_id);
      setName(name);
      setLocation(location);
      setPhone(phone);
      setEmail(email);  
    }
    
  }, []);
  return (
    <>
      <Accordion className='text-center' alwaysOpen flush>
        <Accordion.Header>
          <h4>Contact</h4>
        </Accordion.Header>
        <Accordion.Body>
          <Form>
            <Container className='text-center'>
              <Row>
                <Col>
                  <Field placeholder='Enter Name'
                  id={id}
                  value={name}
                  modify={(id, name)=>setName(name)}>
                    <BsFillPersonFill />
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field placeholder='Enter Email Address'
                  id={id}
                  value={email}
                  modify={(id, email)=>setEmail(email)}>
                    <AiOutlineMail />
                  </Field>
                </Col>
                <Col>
                  <Field placeholder='Enter Phone No.'
                  id={id}
                  value={phone}
                  modify={(id, phone)=>setPhone(phone)}>
                    <AiTwotonePhone />
                  </Field>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Field placeholder='Location'
                  id={id}
                  value={location}
                  modify={(id, location)=>setLocation(location)}>
                    <GoLocation />
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    onClick={onSaveClick}
                    variant='outline-dark'
                    className='flex justify-content-flex-start'
                    // style={{display: 'flex', justifyContent: 'flex-start'}}
                  >
                    <FaSave />
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </Accordion.Body>
      </Accordion>
    </>
  );
};
export default Contact;
