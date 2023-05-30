import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Experience from "./components/experience";
import Project from "./components/projects";
import Skills from "./components/skills";
import Education from "./components/education";
import Contact from "./components/contact";
import "./styles.css";
function App() {
  const [experienceReplaced, setExperienceReplaced] = useState(false);
  const [projectReplaced, setProjectReplaced] = useState(false);
  const [skillReplaced, setSkillReplaced] = useState(false);
  const [educationReplaced, setEducationReplaced] = useState(false);
  const [contactReplaced, setContactReplaced] = useState(false);
  const replaceSection = (sectionName) => {
    switch (sectionName) {
      case "experience":
        if (!experienceReplaced) setExperienceReplaced(true);
        break;
      case "project":
        if (!projectReplaced) setProjectReplaced(true);
        break;
      case "skill":
        if (!skillReplaced) setSkillReplaced(true);
        break;
      case "education":
        if (!educationReplaced) setEducationReplaced(true);
        break;
      case "contact":
        if (!contactReplaced) setContactReplaced(true);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <Container fluid className='vh-100'>
        <Row className='text-center'>
          <h1>Create Profile</h1>
        </Row>
        <Row className='justify-content-md-center'>
          <Col md={8} className='border border-dark m-1'>
            <Container fluid>
              <Row
                className='section'
                
              >
                <Col className='p-1'>
                  {contactReplaced ? (
                    <Contact />
                  ) : (
                    <div
                      role='button'
                      className='section__placeholder p-3 text-center'
                      onClick={() => replaceSection("contact")}
                    >
                      + Add Contact Section
                    </div>
                  )}
                </Col>
              </Row>
              <Row
                className='section'
                
              >
                <Col className='p-1 text-center'>
                  {educationReplaced ? (
                    <Education />
                  ) : (
                    <div
                      role='button'
                      className='section__placeholder p-3 text-center'
                      onClick={() => replaceSection("education")}
                    >
                      + Add Education Section
                    </div>
                  )}
                </Col>
              </Row>
              <Row className='section'>
                {skillReplaced ? (
                  <Col className='p-1 text-center'>
                    <Skills />
                  </Col>
                ) : (
                  <Col className='p-1'>
                    <div
                      role='button'
                      className='section__placeholder p-3 text-center'
                      onClick={() => replaceSection("skill")}
                    >
                      + Add Skill Section
                    </div>
                  </Col>
                )}
              </Row>
              <Row
                className='section'
                
              >
                {experienceReplaced ? (
                  <Col className='p-1 text-center'>
                    <Experience />
                  </Col>
                ) : (
                  <Col className='p-1'>
                    <div
                      role='button'
                      className='section__placeholder p-3 text-center'
                      onClick={() => replaceSection("experience")}
                    >
                      + Add Experience Section
                    </div>
                  </Col>
                )}
              </Row>
              <Row
                className='section'
                
              >
                {projectReplaced ? (
                  <Col className='p-1 text-center'>
                    <Project />
                  </Col>
                ) : (
                  <Col className='p-1'>
                    <div
                      role='button'
                      className='section__placeholder p-3 text-center'
                      onClick={() => replaceSection("project")}
                    >
                      + Add Projects Section
                    </div>
                  </Col>
                )}
              </Row>

              <Row className='section'>
                <Col className='p-1'>
                  <div
                    role='button'
                    className='section__placeholder p-3 text-center'
                  >
                    + Add Custom Section
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          {/* <Col className='border bg-secondary text-center p-2 m-1'>
            <h1>Preview</h1>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default App;
