import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import PageNotFound from "./components/pageNotFound";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
function App() {
  return (
    <>
      <div className='App'>
        <h1>Create Profile</h1>

        <BrowserRouter>
          <div className='flex flex-row'>
            <div className='flex flex-col sections'>
              <Link to='/contact'>
                <div>Contact Info</div>
              </Link>
              <Link to='/education'>
                <div>Education</div>
              </Link>
              <Link to='/skills'>
                <div>Skills</div>
              </Link>
              <Link to='/experience'>
                <div>Experience</div>
              </Link>

              <Link to='/projects'>
                <div>Projects</div>
              </Link>
            </div>
            <div>
              <Routes>
                <Route path='/education' element={<Education />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
      <Button variant='outline-dark'>Generate Resume!</Button>
    </>
  );
}

export default App;
