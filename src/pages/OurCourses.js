import { useState } from "react";
import { Courses } from "../components/Course";
import { useLocation } from "react-router-dom";
import { Section, Category, Title } from "../components/Styles/Styles";
import star from "../components/img/course/icons/5star.png";
const OurCourses = ({ Api }) => {
  return (
    <>
      <Courses Api={Api} />
    </>
  );
};

export default OurCourses;

export const CourseType = ({ Api }) => {
  const { pathname } = useLocation();
  const [course, SetCourse] = useState(Api);
  const currentCourse = course.filter(
    (courseState) =>
      courseState.url_1 === pathname || courseState.url_2 === pathname
  );
  return (
    <Section>
      <Title center>
        {(pathname === "/our-courses/offline" && "OFFLINE COURSES") ||
          (pathname === "/our-courses/online" && "ONLINE COURSES") ||
          (pathname === "/our-courses/recorded" && "RECORDED COURSES") ||
          (pathname === "/our-courses/graphic-design" && "GRAPHIC DESIGN") ||
          (pathname === "/our-courses/web-design" && "WEB DESIGN") ||
          (pathname === "/our-courses/web-development" && "WEB DEVELOPMENT") ||
          (pathname === "/our-courses/video-editing" && "VIDEO EDITING") ||
          (pathname === "/our-courses/digital-marketing" &&
            "DIGITAL MARKETING") ||
          (pathname === "/our-courses/ui-ux-design" && "UI/UX DESIGN") ||
          (pathname === "/our-courses/microsoft-office" &&
            "Microsoft Office") ||
          (pathname === "/our-courses/app-development" && "App Development")}
      </Title>
      <Category Border>
        {currentCourse.map((e) => (
          <div className="box">
            <img src={e.img} alt="img" />
            <div className="info">
              <span>{e.category}</span>
              <h4>{e.title}</h4>
              <div className="rating">
                {e.rating === "5" && <img src={star} alt="img" />}
                <span>{e.price}</span>
              </div>
            </div>
          </div>
        ))}
      </Category>
    </Section>
  );
};
