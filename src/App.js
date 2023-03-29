import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./custom.css";
import HomePage from "./pages/HomePage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course-details" element={<CourseDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
