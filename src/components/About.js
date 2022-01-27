import {
  Section,
  Title,
  VideoLinks,
  Box,
  Container,
  Iframe,
} from "./Styles/Styles";
import play from "./img/play.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Feedback = () => {
  return [
    {
      title: "Watch Graphic Design Student Feedback",
      url: "/student-feedback",
    },
    {
      title: "Watch Web Design Student Feedback",
      url: "/student-feedback",
    },
    {
      title: "Watch Digital Marketing Student Feedback",
      url: "/student-feedback",
    },
    {
      title: "Watch Video Editing Student Feedback",
      url: "/student-feedback",
    },
    {
      title: "Watch All Feedback of our students",
      url: "/student-feedback",
    },
  ];
};
const About = () => {
  const [feedback, setFeedback] = useState(Feedback);
  return (
    <Section>
      <Title center>ABOUT US</Title>
      <Container Mobile>
        <Iframe
          src="https://www.youtube.com/embed/oJz9IlP2yl4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
        <VideoLinks>
          {feedback.map((e) => (
            <Link to={e.url}>
              <Box>
                <span>{e.title}</span>
                <img height="50px" src={play} alt="icon" />
              </Box>
            </Link>
          ))}
        </VideoLinks>
      </Container>
    </Section>
  );
};

export default About;
