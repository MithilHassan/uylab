import Hero from "../components/Hero";
import { CourseList } from "../components/Course";
import AboutUs from "../components/AboutUs";
import Faq from "../components/Faq";
import Sliders from "../components/Slider";
import { FooterTop } from "../components/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <CourseList />
      <AboutUs />
      <Faq />
      <Sliders />
      <FooterTop />
    </>
  );
};
export default Home;
