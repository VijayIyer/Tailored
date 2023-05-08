import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
function App() {
  return (
    <>
      
        <Container fluid className="vh-100">
          <Row className="justify-content-md-center">
            <Col md={8} className="border m-1">
              <Container fluid>
                  <Row>
                    <Col className="p-1">
                      <div role="button" className="p-3 border text-center">+ Add Experience Section</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="p-1">
                      <div role="button" className="p-3 border text-center">+ Add Projects Section</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="p-1">
                      <div role="button" className="p-3 border text-center">+ Add Skill Section</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="p-1">
                    <div role="button" className="p-3 border text-center">
                      + Add Education Section
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="p-1">
                    <div role="button" className="p-3 border text-center">
                      + Add Contact Section
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="p-1">
                    <div role="button" className="p-3 border text-center">
                      + Add Hobbies Section
                    </div>
                    </Col>
                  </Row>
              </Container>
            </Col>
            <Col className="border text-center">
                Preview
            </Col>
            </Row>
        </Container>
      
    </>
  );
}

export default App;
