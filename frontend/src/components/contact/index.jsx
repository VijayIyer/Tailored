import { useState } from "react";
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
const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [location, setLocation] = useState(null);
  const onSaveClick = (e) => {
    e.preventDefault();
  };
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
                  <Field placeholder='Enter Name'>
                    <BsFillPersonFill />
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field placeholder='Enter Email Address'>
                    <AiOutlineMail />
                  </Field>
                </Col>
                <Col>
                  <Field placeholder='Enter Phone No.'>
                    <AiTwotonePhone />
                  </Field>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Field placeholder='Location'>
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
