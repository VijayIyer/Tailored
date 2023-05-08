import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.css";
import Experience from './components/experience';
import Project from './components/projects';
import Skills from './components/skills';
import Education from './components/education';
import Contact from './components/contact';
import "./styles.css";
function App() {
  const [experienceReplaced, setExperienceReplaced] = useState(false);
  const [projectReplaced, setProjectReplaced] = useState(false);
  const [skillReplaced, setSkillReplaced] = useState(false);
  const [educationReplaced, setEducationReplaced] = useState(false);
  const [contactReplaced, setContactReplaced] = useState(false);
  const replaceSection = (sectionName)=>{
    switch(sectionName){
      case 'experience':
        if(!experienceReplaced) setExperienceReplaced(true);
        return;
      case 'project':
        if(!projectReplaced) setProjectReplaced(true);
        return;
      case 'skill':
        if(!skillReplaced) setSkillReplaced(true);
      case 'education':
        if(!educationReplaced) setEducationReplaced(true);
      case 'contact':
        if(!contactReplaced) setContactReplaced(true);
      default:
        return;
    }
  }
  return (
    <>
      
        <Container fluid className="vh-100">
          <Row className="justify-content-md-center">
            <Col md={8} className="border border-dark m-1">
              <Container fluid>
                  <Row className="section" onClick={()=>replaceSection('experience')}>
                    {experienceReplaced ? 
                      <Col className="p-1 text-center"><Experience /></Col>
                      :
                      ( 
                      <Col className="p-1">
                        <div role="button" className="section__placeholder p-3 text-center">+ Add Experience Section
                        </div>
                      </Col>
                      )
                    }
                  </Row>
                  <Row className="section" onClick={()=>replaceSection('project')}>
                    {projectReplaced ? 
                      <Col className="p-1 text-center"><Project /></Col>
                      :
                      ( 
                      <Col className="p-1">
                        <div role="button" className="section__placeholder p-3 text-center">+ Add Projects Section
                        </div>
                      </Col>
                      )
                    }
                  </Row>
                  <Row className="section" onClick={()=>replaceSection('skill')}>
                    {skillReplaced ? 
                    <Col className="p-1 text-center"><Skills /></Col>
                    :(<Col className="p-1">
                      <div role="button" className="section__placeholder p-3 text-center">+ Add Skill Section</div>
                    </Col>)
                  }
                  </Row>
                  <Row className="section" onClick={()=>replaceSection('education')}>
                    <Col className="p-1 text-center">
                    {educationReplaced ?
                    <Education />
                    :
                    (<div role="button" className="section__placeholder p-3 text-center">
                      + Add Education Section
                    </div>)
                  }
                    </Col>
                  </Row>
                  <Row className="section" onClick={()=>replaceSection('contact')}>
                    <Col className="p-1">
                    {contactReplaced ?
                    <Contact />
                    :
                    (<div role="button" className="section__placeholder p-3 text-center">
                        + Add Contact Section
                      </div>)
                    }
                    </Col>
                  </Row>
                  <Row className="section">
                    <Col className="p-1">
                    <div role="button" className="section__placeholder p-3 text-center">
                      + Add Custom Section
                    </div>
                    </Col>
                  </Row>
              </Container>
            </Col>
            <Col className="border text-center p-2 m-1">
                <h1>Preview</h1>
            </Col>
            </Row>
        </Container>
      
    </>
  );
}

export default App;
