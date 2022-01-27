import Hero from "../components/Hero";
import { CourseList } from "../components/Course";
import About from "../components/About";
import Faq from "../components/Faq";
import Sliders from "../components/Slider";
import { FooterTop } from "../components/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <CourseList />
      <About />
      <Faq />
      <Sliders />
      <FooterTop />
    </>
  );
};
export default Home;
