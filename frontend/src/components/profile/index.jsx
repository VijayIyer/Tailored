import Contact from "../contact";
import Education from "../education";
import Experience from "../experience";
import PageNotFound from "../pageNotFound";
import Projects from "../projects";
import Skills from "../skills";
import InfoPage from "../infoPage";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
export default function CreateProfile() {
  return (
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
            <Route path='/' element={<InfoPage />} />
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
  );
}
