import React, { useState } from "react";
import {
  Section,
  Title,
  SubTitle,
  Banner,
  Card,
  CardWrapper,
  Article,
  Button,
  Category,
  Container,
} from "./Styles/Styles";
import { Link } from "react-router-dom";
import star from "./img/course/icons/5star.png";
import photo from "./img/course/photo.jpg";
import { CardContent, CourseType } from "./CourseApi";
import { ThemeProvider } from "styled-components";
export const CourseList = () => {
  const theme = {
    clr: "#fff",
    border: "1px solid #fff",
    height: "100px",
  };
  const [contents, setContents] = useState(CardContent);
  return (
    <Section>
      <Title center>OUR COURSES</Title>
      <SubTitle None center>
        For more information about our courses please see the individual course
        pages
      </SubTitle>
      <CardWrapper>
        <ThemeProvider theme={theme}>
          {contents.map((content) => (
            <Card>
              <Link to={content.url}>
                <img src={content.icon} alt="logo" />
              </Link>
              <h3>{content.title}</h3>
            </Card>
          ))}
        </ThemeProvider>
        <Banner>
          <Article>
            <h1>WHY CHOOSE US!</h1>
            <p>
              UY LAB Has Been Providing Our Services With World-Class Quality
              And Has Numerous Satisfied Clients. We Have Designed All Of Our
              Training Courses Which Are Best Suited For The Students Of
              Bangladesh. But For That We Do Not Compromise The Quality Rather
              We Take Special Care Of Every Student Who Have IT Knowledge From
              Basic To Advanced
            </p>
            <ThemeProvider theme={theme}>
              <Button Medium>Read More</Button>
            </ThemeProvider>
          </Article>
          <img className="laptop" src={photo} alt="img" />
        </Banner>
      </CardWrapper>
    </Section>
  );
};

export const Courses = ({ Api }) => {
  const [courseTypes, setCourseTypes] = useState(CourseType);
  const [visible, setVisible] = useState(6);
  const PopularCourse = Api;
  const loadMore = (e) => {
    setVisible((prevValue) => prevValue + 3);
  };
  return (
    <>
      <Section>
        <Title center>OUR COURSES</Title>
        <SubTitle None center>
          For more information about our courses please see the individual
          course pages
        </SubTitle>
        <Category>
          {courseTypes.map((type) => (
            <div className="box">
              <Link to={type.url}>
                <img src={type.img} alt="img" />
                <br />
                <span className="btn">{type.type}</span>
              </Link>
            </div>
          ))}
        </Category>
      </Section>
      <Section>
        <Title center>MOST POPULAR COURSES</Title>
        <SubTitle None center>
          We show our most popular pre-recorded courses. Buy now and start
          learning
        </SubTitle>
        <Category Border>
          {PopularCourse.slice(0, visible).map((course) => (
            <div className="box">
              <img src={course.img} alt="img" />
              <div className="info">
                <span>{course.category}</span>
                <h4>{course.title}</h4>
                <div className="rating">
                  {course.rating === "5" && <img src={star} alt="img" />}
                  <span>{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </Category>
        <Container Center>
          <Button
            style={{
              display: `${visible >= PopularCourse.length && "none"}`,
            }}
            onClick={loadMore}
            Medium
            theme={{ bg: "#2BA6DE", clr: "#fff" }}
          >
            Load More
          </Button>
        </Container>
      </Section>
    </>
  );
};

export const Offline = () => {};
