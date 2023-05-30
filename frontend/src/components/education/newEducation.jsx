import { Container, Row, Col, Form, InputGroup, Button, Accordion } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaSave } from 'react-icons/fa';
import { MdDeleteForever, MdDone } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import Field from '../utils/field';
export default function NewEducation({ 
	id, 
	removeItem, 
	label,
	institution, 
	major, 
	startDate, 
	endDate, 
	degreeName, 
	modifyItemLabel, 
	modifyDegree, 
	modifyMajor, 
	modifyInstitution, 
	modifyStartDate, 
	modifyEndDate }){
	const [header, setHeader] = useState(null);
	const [editMode, setEditMode] = useState(false);
	// const [institution, setInstitution] = useState(null); 
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null); 
  // const [degreeName, setDegreeName] = useState(null);
  // const [major, setMajor] = useState(null)
	const saveEducation = ()=>{
		fetch(`http://localhost:5000/api/v1/education/${id}`, {
			method:'POST',
			body:JSON.stringify({
				institution, 
				startDate, 
				endDate, 
				degreeName, 
				major,
				label
			}),
			headers:{
				'content-type':'application/json'
			}
		})
		.then(res=>res.json())
		.then(data=>console.log(data))
		.catch(err=>console.error(err))
	}
	useEffect(()=>{
		setHeader(label);
	}, [label])
	return (
		<Accordion alwaysOpen>
		<Accordion.Header>
			<Form.Group>
				<InputGroup onClick={(e)=>e.stopPropagation()}>
					{
						editMode? 
						<Form.Control 
						value={header}
						onChange={(e)=>setHeader(e.target.value)} /> : 
						<Form.Text className="m-3">{header}</Form.Text>
					}
					<InputGroup.Text onClick={(e)=>{
						setEditMode(mode=>!mode);
					}}>
						{editMode ? 
						<MdDone onClick={()=>modifyItemLabel(id, header)} />:
						<FiEdit2 />}
					</InputGroup.Text>
				</InputGroup>
			</Form.Group>
		</Accordion.Header>
		<Accordion.Body>
		<Form className="border p-3">
	        <Container fluid>
	        	<Row>
	        		
	        			<Col>
	        				<Field placeholder="Enter College/Institution Name" 
	        				id={id}
	        				value={institution}
	        				modify={modifyInstitution}>
	        				</Field>
	        			</Col>
	        		
	        	</Row>
	        	<Row>
	        		<Col md={6} xs={6}>
	        			<Field placeholder="Enter Degree"
	        			id={id}
	        			value={degreeName}
	        			modify={modifyDegree}></Field>
	        		</Col>
	        		<Col md={6} xs={6}>
	        			<Field placeholder="Enter Major" 
	        			id={id} 
	        			value={major} 
	        			modify={modifyMajor}></Field>
	        		</Col>
	        		</Row>
	        		<Row>
	        		<Col>
	        			<Form.Group>
	        				<InputGroup>
										<InputGroup.Text>From:</InputGroup.Text>
	        					<Form.Control value={startDate} onChange={(e)=>modifyStartDate(id, e.target.value)} type="date"></Form.Control>
	        				</InputGroup>
	        			</Form.Group>
	        		</Col>
	        		<Col>
	        			<Form.Group>
	        				<InputGroup>
										<InputGroup.Text>To:</InputGroup.Text>
	        					<Form.Control value={endDate} onChange={(e)=>modifyEndDate(id, e.target.value)} type="date"></Form.Control>
	        				</InputGroup>
	        			</Form.Group>
	        		</Col>
	        		
	        	</Row>
	        	<Row>
	        		<Col>
	        			<Button className="flex justify-content-flex-start mt-3" variant="outline-dark" onClick={saveEducation}>
	        				<FaSave />
	        			</Button>
	        		</Col>
	        		<Col>
	        		<Button  onClick={()=>removeItem(id)} className="flex justify-content-flex-start mt-3" variant="outline-dark">
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