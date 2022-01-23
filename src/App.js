import GlobalStyle from "./components/Styles/GlobalStyled";
import Header from "./components/Header";
import Home from "./pages/Home";
import OurCourses, { CourseType } from "./pages/OurCourses";
import AdmissionForm from "./pages/AdmissionForm";
import Verify from "./pages/Verify";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import courseApi from "./components/CourseApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FooterBottom } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [courses, setCourses] = useState(courseApi);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/our-courses"
          element={<OurCourses Api={courses} />}
        ></Route>
        <Route
          path="/our-courses/:id"
          element={<CourseType Api={courses} />}
        ></Route>
        <Route path="/admission-form" element={<AdmissionForm />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <FooterBottom />
    </>
  );
}

export default App;
