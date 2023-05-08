import { Button, Container, Form, FloatingLabel } from 'react-bootstrap';
const Projects = () => {
  return <Container className='d-flex flex-column gap-2'>
      <h1>Add Projects</h1>
      <Form className='d-flex p-5 flex-column gap-2 border border-dark'>
        <div>
          <label>Project Name:</label>
          <input type='text' />
        </div>
        <div className='d-flex gap-2'>
          <div>
            <label>From:</label>
            <input type='date' />
          </div>
          <div>
            <label>To:</label>
            <input type='date' />
          </div>
        </div>
        <div>
          <FloatingLabel controlId='floatingTextarea2' label='Summary'>
            <Form.Control
              as='textarea'
              placeholder='Leave a comment here'
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </div>
        <Button variant='outline-dark'>Save</Button>
      </Form>
      <Button variant='outline-dark'>+ Add Project</Button>
    </Container>
;
};
export default Projects;
