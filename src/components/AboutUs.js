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
const Feedback = () => {
  return [
    {
      title: "Watch Graphic Design Student Feedback",
    },
    {
      title: "Watch Web Design Student Feedback",
    },
    {
      title: "Watch Digital Marketing Student Feedback",
    },
    {
      title: "Watch Video Editing Student Feedback",
    },
    {
      title: "Watch All Feedback of our students",
    },
  ];
};
const AboutUs = () => {
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
            <Box>
              <span>{e.title}</span>
              <img height="50px" src={play} alt="icon" />
            </Box>
          ))}
        </VideoLinks>
      </Container>
    </Section>
  );
};

export default AboutUs;
