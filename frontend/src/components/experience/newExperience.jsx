import { Container, Row, Col, Form, InputGroup, Button, Accordion } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FaSave } from 'react-icons/fa';
import { MdDeleteForever, MdDone } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import Field from '../utils/field';
export default function NewEducation({ headerArgument }){
	const [header, setHeader] = useState(null);
	const [editMode, setEditMode] = useState(false);
	useEffect(()=>{
		console.log(headerArgument);
		setHeader(headerArgument);
	}, [])
	const onEducationTitleChange = (e) =>{
		setHeader(e.target.value);
	}
	return (
		<Accordion alwaysOpen>
		<Accordion.Header>
			<Form.Group>
				<InputGroup onClick={(e)=>e.stopPropagation()}>
					{editMode? <Form.Control value={header} onChange={onEducationTitleChange} /> : 
					<Form.Text className="m-3">{header}</Form.Text>}
					<InputGroup.Text onClick={(e)=>{
						
						setEditMode(mode=>!mode);
					}}>
						{editMode ? <MdDone />:<FiEdit2 />}
					</InputGroup.Text>
				</InputGroup>
			</Form.Group>
		</Accordion.Header>
		<Accordion.Body>
		<Form className="border p-3">
	        <Container fluid>
	        	<Row>
	        		
	        			<Col>
	        				<Field placeholder="Enter College/Institution Name">
	        				
	        				</Field>
	        			</Col>
	        		
	        	</Row>
	        	<Row>
	        		<Col md={6} xs={6}>
	        			<Field placeholder="Enter Degree"></Field>
	        		</Col>
	        		<Col md={6} xs={6}>
	        			<Field placeholder="Enter Major"></Field>
	        		</Col>
	        		</Row>
	        		<Row>
	        		<Col>
	        			<Form.Group>
	        				<InputGroup>
										<InputGroup.Text>From:</InputGroup.Text>
	        					<Form.Control type="date"></Form.Control>
	        				</InputGroup>
	        				
	        				
	        			</Form.Group>
	        		</Col>
	        		<Col>
	        			<Form.Group>
	        				<InputGroup>
										<InputGroup.Text>To:</InputGroup.Text>
	        					<Form.Control type="date"></Form.Control>
	        				</InputGroup>
	        				
	        				
	        			</Form.Group>
	        		</Col>
	        		
	        	</Row>
	        	<Row>
	        		<Col>
	        			<Button className="flex justify-content-flex-start mt-3" variant="outline-dark">
	        				<FaSave />
	        			</Button>
	        		</Col>
	        	</Row>
	        </Container>
	      </Form>
	      </Accordion.Body>
	      </Accordion>
      )
}