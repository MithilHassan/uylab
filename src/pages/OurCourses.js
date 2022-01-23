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
    (courseState) => courseState.url_1 === pathname
  );
  console.log(currentCourse);
  return (
    <Section>
      <Title center>
        {(pathname === "/our-courses/offline" && "OFFLINE COURSES") ||
          (pathname === "/our-courses/online" && "ONLINE COURSES") ||
          (pathname === "/our-courses/recorded" && "RECORDED COURSES")}
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
