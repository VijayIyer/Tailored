import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaSave } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
export default function NewEducation(){
	
	return (
		<Form className="border p-2 mb-3">
	        <Container fluid>
	        	<Row className="m-1">
	        		<Col xs={10} md={10}>
	        			<label className="p-2">Institution / College Name:</label>
	          		<input className="p-2" type='text' />
	        		</Col>
	        		<Col className="d-flex gap-2 ml-auto">
	        			<div role="button" className="p-1"><FaSave /></div>
	        			<div role="button" className="p-1"><MdDeleteForever /></div>
	        		</Col>
	        	</Row>
	        	<Row className="m-1">
	        		<Col md={4} xs={4}>
	        			<label className="p-2">Degree :</label>
	          		<input className="p-2" type='text' />
	        		</Col>
	        		<Col>
	        			<label className="m-2">From:</label>
	            	<input className="m-2" type='date' />
	        		</Col>
	        		<Col>
	        			<label className="m-2">To:</label>
	            	<input className="m-2" type='date' />
	        		</Col>
	        	</Row>
	        	
	        </Container>
	      </Form>
      )
}