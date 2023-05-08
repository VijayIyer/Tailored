import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ResumeBuilder from "../resumeBuilder";
import InfoPage from "../infoPage";
export default function Home() {
  return (
    <div className='d-flex flex-column gap-5 p-2'>
      <BrowserRouter>
        <div className='btn btn-outline-dark border-primary'>
          <Link to='/profile' style={{ textDecoration: "none" }}>
            Add Information To Profile
          </Link>
        </div>
        <div className='btn btn-outline-dark border-primary'>
          <Link to='/builder' style={{ textDecoration: "none" }}>
            Start Building Resume
          </Link>
        </div>
        <Routes>
          <Route path='/profile' element={<InfoPage />} />
          <Route path='/builder' element={<ResumeBuilder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
