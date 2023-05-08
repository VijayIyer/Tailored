import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import { Tooltip } from "bootstrap"
import { FaSave } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
export default function NewExperience(){
	return (
		<Form className="border p-2 mb-3">
	        <Container fluid>
	        	<Row className="m-1">
	        		<Col xs={10} md={10}>
	        			<label className="p-2">Project Name:</label>
	          		<input className="p-2" type='text' />
	        		</Col>
	        		<Col className="d-flex gap-2 ml-auto">
	        			<div role="button" className="p-1"><FaSave /></div>
	        			<div role="button" className="p-1"><MdDeleteForever /></div>
	        		</Col>
	        	</Row>
	        	<Row className="m-1">
	        		<Col>
	        			<label className="m-2">From:</label>
	            	<input className="m-2" type='date' />
	        		</Col>
	        		<Col>
	        			<label className="m-2">To:</label>
	            	<input className="m-2" type='date' />
	        		</Col>
	        	</Row>
	        	<Row className="m-1">
	        		<div>
	          <FloatingLabel controlId='floatingTextarea2' label='Summary'>
	            <Form.Control
	              as='textarea'
	              placeholder='Leave a comment here'
	              style={{ height: "100px" }}
	            />
	          </FloatingLabel>
	        	</div>
	        	</Row>
	        </Container>
    </Form>)
}