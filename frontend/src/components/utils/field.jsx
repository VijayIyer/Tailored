import { Form, InputGroup, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { MdDone } from 'react-icons/md';
export default function Field({ placeholder, children }){
	const [editMode, setEditMode] = useState(false);
	const toggleEditMode = ()=>{
		setEditMode(editMode=> !editMode);
	}
	useEffect(()=>{
		console.log(editMode);
	}, [editMode])
	return (
						<Form.Group className="mb-3">
              <InputGroup >
                { children ? 
	                (
	                	<InputGroup.Text>
	                		{children}
	                	</InputGroup.Text>
	                ) :
                (<></>)
              	}
                <Form.Control disabled={!editMode} placeholder={placeholder} />
                <Button onClick={toggleEditMode} variant='outline-secondary'>{editMode? <MdDone /> : <FiEdit2 /> }</Button>
              </InputGroup>
             </Form.Group>
              )
}