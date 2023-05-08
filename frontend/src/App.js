import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import PageNotFound from "./components/pageNotFound";
import Projects from "./components/projects";
import Skills from "./components/skills";
import InfoPage from "./components/infoPage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import ResumeBuilder from "./components/resumeBuilder";
function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar bg='dark' variant='dark' fixed='top'>
            <Container>
              <Navbar.Brand href='/'>
                <img
                  src='/images/resume-icon-png-19025.png'
                  width='30'
                  height='30'
                  className='d-inline-block align-top'
                  alt='Home'
                />
              </Navbar.Brand>
              <Nav className='me-auto'>
                <NavDropdown title='Build Profile'>
                  <NavDropdown.Item>
                    <Link to='/contact' style={{ textDecoration: "none" }}>
                      Contact
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <Link to='/experience' style={{ textDecoration: "none" }}>
                      Experience
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/skills' style={{ textDecoration: "none" }}>
                      Skills
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/projects' style={{ textDecoration: "none" }}>
                      Projects
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to='/education' style={{ textDecoration: "none" }}>
                      Education
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='/builder'>Build Resume</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Container>
            <Routes>
              <Route path='/' element={<InfoPage />} />
              <Route path='/education' element={<Education />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/builder' element={<ResumeBuilder />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
