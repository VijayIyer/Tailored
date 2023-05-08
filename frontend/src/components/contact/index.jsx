import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
const Contact = () => {
  return (
    <>
      <h1>Add Contact Details</h1>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Phone</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Button
          onClick={(e) => e.preventDefault()}
          variant='primary'
          type='submit'
        >
          Save
        </Button>
      </Form>
    </>
  );
};
export default Contact;
