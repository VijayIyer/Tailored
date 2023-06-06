import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
function CreateProfilePage() {
  const location = useLocation();
  const profileId = location.state.profileId;
  const [experienceReplaced, setExperienceReplaced] = useState(false);
  const [projectReplaced, setProjectReplaced] = useState(false);
  const [skillReplaced, setSkillReplaced] = useState(false);
  const [educationReplaced, setEducationReplaced] = useState(false);
  const [contactReplaced, setContactReplaced] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [educationData, setEducationData] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/api/v1/contact/${profileId}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        if(res.ok) return res.json();
        throw new Error(`Something went wrong getting contact record for ${profileId}`);
      })
      .then((data) => {
        if (data.contact) { 
          setContactReplaced(true);
          setContactData(data.contact);
        }
      })
      .catch((err) => console.error(`err:${err}`));
  }, []);
  useEffect(()=>{
    fetch(`http://localhost:5000/api/v1/skills/${profileId}`, {
      method:'GET',
      headers:{
        'content-type':'application/json'
      }
    })
    .then(res=>{ 
      if(res.ok) return res.json();
      throw new Error('error getting skills');
    })
    .then(data=>{
        console.log(`saved skills are  - ${data.skills}`);
        setSkillReplaced(true);
        setSkillData(data.skills)
    })
    .catch(err=>console.error(err))
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/education/${profileId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => { 
        if(res.ok) return res.json();
        throw new Error(`error retrieving education record for profile ${profileId}`)
      })
      .then((data) => {
        if (data.education.length > 0) { 
          setEducationReplaced(true);
          setEducationData(data.education);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/experience/${profileId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
    .then((res) => { 
        if(res.ok) return res.json();
        throw new Error(`error retrieving experience records for profile ${profileId}`)
    })
    .then((data) => {
        if(data.experiences.length > 0){
          console.log(`setting experience replaced to true`);
          setExperienceReplaced(true);
          setExperienceData(data.experiences);  
        }
    })
    .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/projects/${profileId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
    .then((res) => { 
        if(res.ok) return res.json();
        throw new Error(`error retrieving project records for profile ${profileId}`)
    })
    .then((data) => {
        if(data.projects.length > 0){
          setProjectReplaced(true);
          setProjectData(data.projects);  
        }
    })
    .catch((err) => console.error(err));
  }, []);
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
              <Row className='section'>
                <Col className='p-1'>
                  {contactReplaced ? (
                    <Contact data={contactData}/>
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
              <Row className='section'>
                <Col className='p-1 text-center'>
                  {educationReplaced ? (
                    <Education data={educationData} />
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
                    <Skills data={skillData}/>
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
              <Row className='section'>
                {experienceReplaced ? (
                  <Col className='p-1 text-center'>
                    <Experience data={experienceData}/>
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
              <Row className='section'>
                {projectReplaced ? (
                  <Col className='p-1 text-center'>
                    <Project data={projectData} />
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

export default CreateProfilePage;
