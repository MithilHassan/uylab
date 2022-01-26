import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Article,
  Card,
  CardWrapper,
  Button,
  Section,
} from "./Styles/Styles";
import { StyledHero } from "./Styles/Hero.Styles";
import img1 from "../components/img/hero/01.png";
import img2 from "../components/img/hero/02.png";
import img3 from "../components/img/hero/03.png";
import img4 from "../components/img/hero/04.png";
import { ThemeProvider } from "styled-components";
const CardContent = () => {
  return [
    {
      icon: img1,
      title: "10,000+",
      subtitle: "TRAINED STUDENTS",
      url: "/student-gallery",
    },
    {
      icon: img2,
      title: "SUCCESS",
      subtitle: "1000+ STUDENTS FEEDBACK",
      url: "/student-feedback",
    },
    {
      icon: img3,
      title: "INDUSTRIES",
      subtitle: "900+ JOB PLACEMENTS",
      url: "/job-placement",
    },
    {
      icon: img4,
      title: "EXPERT",
      subtitle: `50+ MENTOR'S`,
      url: "/experts",
    },
  ];
};
const Hero = () => {
  const theme = {
    clr: "#000",
    bg: "#ffc000",
  };
  const [contents, setContents] = useState(CardContent);
  return (
    <Section NoPadding>
      <StyledHero>
        <Container>
          <ThemeProvider theme={theme}>
            <Article>
              <h1>
                LOOKING FOR BEST IT COURSE
                <br />
                <span>IN BANGLADESH?</span>
              </h1>
              <p>WE PROVIDE TOP QUALITY IT COURSE WITH VALUE OF MONEY!</p>
              <Link to="/admission-form">
                <Button Big>ENROLL NOW</Button>
              </Link>
            </Article>
          </ThemeProvider>
        </Container>
        <CardWrapper Responsive>
          {contents.map((content) => (
            <Card>
              <Link to={content.url}>
                <img src={content.icon} alt="logo" />
              </Link>
              <h3>{content.title}</h3>
              <p>{content.subtitle}</p>
            </Card>
          ))}
        </CardWrapper>
      </StyledHero>
    </Section>
  );
};

export default Hero;
