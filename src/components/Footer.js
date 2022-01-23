import {
  Section,
  StyledVerify,
  SubTitle,
  Column,
  Info,
  Container,
  Btn,
  Input,
} from "./Styles/Styles";
import { StyledFooter } from "./Styles/Footer.Styles";
import { useLocation } from "react-router-dom";
import img1 from "./img/Jahi-3-100x100.png";
import img2 from "./img/1-2-100x100.png";
import { ThemeProvider } from "styled-components";
export const FooterBottom = () => {
  const { pathname } = useLocation();
  const theme = {
    width: "25%",
  };
  return (
    <StyledFooter pathname={pathname}>
      <Container AlignStart Wrap>
        <ThemeProvider theme={theme}>
          <Column>
            <h3>About</h3>
            <p>
              UY LAB is One Of The Best It Training Institute In Bangladesh.We
              Make Professionals. We offer High Quality Courses for your skill
              development. All Training programs designed by industry experts.
            </p>
          </Column>
          <Column>
            <h3>Contact</h3>
            <p>
              11 Bir Uttam AK Khandakar Road, 31 Mohakhali Commercial Area,
              <br />
              Colombia Super Market, 4th Floor,
              <br /> Wireless Gate, 1213 <br /> Tel.: 01783-838382 <br />
              contact@uylab.org
            </p>
          </Column>
          <Column>
            <h3>Pages</h3>
            <ul>
              <span>● Home</span>
              <span>● About US</span>
              <span>● Contact</span>
              <span>● Blog</span>
              <span>● Courses</span>
              <span>● Verify</span>
              <span>● Guide</span>
              <span>● How to Buy</span>
              <span>● Start Course</span>
              <span>● Privacy Policy</span>
              <span>● Terms & Condition</span>
              <span>● Refund Policy</span>
            </ul>
          </Column>
          <Column>
            <h3>Popular Courses</h3>
            <Container Start>
              <img height="50px" src={img1} alt="img" />
              <Info>
                <h4>
                  Professional Graphic Design <br /> | Offl...
                </h4>
                <span>BY JAHI ISLAM</span>
              </Info>
            </Container>
            <Container Start>
              <img height="50px" src={img2} alt="img" />
              <Info>
                <h4>
                  অ্যাডভান্সড ফেসবুক মার্কেটিং <br /> কোর্স...
                </h4>
                <span>BY M HEMAL_RAHMAN</span>
              </Info>
            </Container>
          </Column>
        </ThemeProvider>
      </Container>
    </StyledFooter>
  );
};

export const FooterTop = () => {
  const theme = {
    bg: "#66CC33",
  };
  return (
    <Section theme={theme}>
      <Container Start Wrap>
        <Column theme={{ clr: "#fff", width: "50%" }}>
          <SubTitle>Subscribe our newsletter</SubTitle>
          <p>
            Learn a new word every day. Delivered to your inbox! <br /> we are
            ready to help so don’t hesitate to give your email address.
          </p>
        </Column>
        <StyledVerify>
          <SubTitle theme={{ clr: "#fff" }}>YOUR E-MAIL ADDRESS</SubTitle>
          <div>
            <Input type="text" placeholder="Enter certificate code" />
            <Btn>CHECK CODE</Btn>
          </div>
        </StyledVerify>
      </Container>
    </Section>
  );
};
