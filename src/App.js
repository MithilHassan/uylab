import GlobalStyle from "./components/Styles/GlobalStyled";
import Header from "./components/Header";
import Home from "./pages/Home";
import OurCourses, { CourseType } from "./pages/OurCourses";
import AdmissionForm from "./pages/AdmissionForm";
import Verify from "./pages/Verify";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import courseApi from "./components/CourseApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FooterBottom } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LogIn from "./pages/LogIn";
import Expert from "./pages/Expert";
import Students from "./pages/StudentsGallery";
import StudentsApi from "./components/StudentsApi";
import WishList from "./pages/Wishlist";
function App() {
  const [courses, setCourses] = useState(courseApi);
  const [gallery, setGallery] = useState(StudentsApi);

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
        <Route path="/:id" element={<Students Api={gallery} />}></Route>
        <Route path="/experts" element={<Expert />}></Route>
        <Route path="/admission-form" element={<AdmissionForm />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
      </Routes>
      <FooterBottom />
    </>
  );
}

export default App;
