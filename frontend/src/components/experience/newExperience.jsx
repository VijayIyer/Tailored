import { Container, Row, Col, Form, InputGroup, Button, Accordion, FloatingLabel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaSave } from 'react-icons/fa';
import { MdDeleteForever, MdDone } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import Field from '../utils/field';
export default function NewExperience({id, 
	removeItem, 
	headerArgument, 
	modifyItemLabel, 
	modifyJobTitle, 
	modifySummary, 
	modifyCompanyName, 
	modifyStartDate, 
	modifyEndDate }){
	const [header, setHeader] = useState(null);
	const [editMode, setEditMode] = useState(false);
	const [companyName, setCompanyName] = useState(null); 
  const [jobTitle, setJobTitle] = useState(null);
	useEffect(()=>{
		console.log(headerArgument);
		setHeader(headerArgument);
	}, [])
	
	return (
		<Accordion alwaysOpen>
		<Accordion.Header>
			<Form.Group>
				<InputGroup onClick={(e)=>e.stopPropagation()}>
					{editMode? <Form.Control value={header} onChange={(e)=>setHeader(e.target.value)} /> : 
					<Form.Text className="m-3">{header}</Form.Text>}
					<InputGroup.Text onClick={(e)=>{
						
						setEditMode(mode=>!mode);
					}}>
						{editMode ? <MdDone onClick={()=>modifyItemLabel(id, header)} />:<FiEdit2 />}
					</InputGroup.Text>
				</InputGroup>
			</Form.Group>
		</Accordion.Header>
		<Accordion.Body>
		<Form className="border p-3">
	        <Container fluid>
	        	<Row>
	        		
	        			<Col>
	        				<Field placeholder="Enter Company Name"
	        				id={id}
	        				value={companyName}
	        				modify={modifyCompanyName}>
	        				</Field>
	        			</Col>
	        		
	        	</Row>
	        	<Row>
	        		<Col>
	        			<Field placeholder="Enter Job Title"
	        				id={id}
	        				value={jobTitle}
	        				modify={modifyJobTitle}></Field>
	        		</Col>
	        		
	        		</Row>
	        		<Row>
	        		<Col>
	        			<Form.Group>
	        				<InputGroup>
										<InputGroup.Text>From:</InputGroup.Text>
	        					<Form.Control 
	        						onChange={(e)=>modifyStartDate(id, e.target.value)} 
	        						type="date">
	        					</Form.Control>
	        				</InputGroup>
	        				
	        				
	        			</Form.Group>
	        		</Col>
	        		<Col>
	        			<Form.Group>
	        				<InputGroup>
										<InputGroup.Text>To:</InputGroup.Text>
	        					<Form.Control 
	        						onChange={(e)=>modifyEndDate(id, e.target.value)} 
	        						type="date">
	        					</Form.Control>
	        				</InputGroup>
	        				
	        				
	        			</Form.Group>
	        		</Col>
	        		
	        	</Row>
	        	<Row>
	        	 <Col><FloatingLabel className="mt-3" controlId='floatingTextarea2' label='Summary'>
	            <Form.Control
	              as='textarea'
	              placeholder='Leave a comment here'
	              style={{ height: "100px" }}
	              onChange={(e)=>{ 
	              	console.log(e.target.value);
	              	modifySummary(id, e.target.value);
	              }}
	            />
	          </FloatingLabel>
	          </Col>
	        	</Row>
	        	<Row>
	        		<Col>
	        			<Button className="flex justify-content-flex-start mt-3" variant="outline-dark">
	        				<FaSave />
	        			</Button>
	        		</Col>
	        		<Col>
	        		<Button onClick={()=>removeItem(id)} className="flex justify-content-flex-start mt-3" variant="outline-dark">
	        			<AiOutlineDelete />
	        		</Button>
	        		</Col>
	        	</Row>
	        	
	        </Container>
	      </Form>
	      </Accordion.Body>
	      </Accordion>
      )
}