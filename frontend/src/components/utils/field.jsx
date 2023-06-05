import { Form, InputGroup, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
export default function Field({ id, value, modify, placeholder, children }) {
  const [editMode, setEditMode] = useState(false);
  const [fieldValue, setFieldValue] = useState(null);
  const toggleEditMode = () => {
    setEditMode((editMode) => !editMode);
  };
  useEffect(() => {
    setFieldValue(value);
  }, [value]);
  return (
    <Form.Group className='mb-3'>
      <InputGroup>
        {children ? <InputGroup.Text>{children}</InputGroup.Text> : <></>}
        <Form.Control
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
          disabled={!editMode}
          placeholder={placeholder}
        />
        <Button
          onClick={() => {
            toggleEditMode();
            if (editMode) modify(id, fieldValue);
          }}
          variant='outline-secondary'
        >
          {editMode ? <MdDone /> : <FiEdit2 />}
        </Button>
      </InputGroup>
    </Form.Group>
  );
}
