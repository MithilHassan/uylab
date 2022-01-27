import {
  AboutSection,
  Container,
  Col,
} from "../components/Styles/AboutUs.Styles";
import img1 from "../components/img/about/1.jpg";
import img2 from "../components/img/about/2.jpeg";
import { useState } from "react";
const AboutUs = () => {
  const [active, setActive] = useState(false);
  return (
    <AboutSection>
      <Container>
        <Col theme={{ width: "48%" }}>
          <div>
            <h1>Welcome to UY LAB!</h1>
            <p className="border">
              One Of The Main Objectives Of The UY LAB Is To Create Skilled And
              Professionally Committed IT Experts, By Providing World-Class
              Training Facilities, To Contribute To The Development Of The IT
              Industry Of Bangladesh As Well As To Make Them Capable Enough To
              Work In The Local And International IT Industry And Marketplaces.
              <br />
              We Have Skilled And Experienced Trainer Team, Those Make Sure Each
              Student To Become Able To Prove Himself As A Qualified
              Professional In The Competitive Corporate World. UY LAB Ensures
              First Strong Basic Knowledge On The Course Trainees Get Taught In.
              The UY LAB Believes In Providing Standard Training Facilities,
              Which Allows Each Trainee To Become Successful IT Professionals
              And Freelancers, So That Those Can Contribute To Local IT
              Development For Long Run.
            </p>
            <p>Unordered & Ordered Lists</p>
            <ul>
              <li>👍 Online Courses with full discount systems.</li>
              <li>👍 Online Certificates which can be used worldwide.</li>
              <li>
                👍 An online leadership development program at Amader Academy.
              </li>
            </ul>
            <img src={img1} alt="img" />
          </div>
          <div>
            <img src={img2} alt="img" />
            <div className="btns">
              <span
                className={`${!active && "active"}`}
                onClick={() => setActive(!active)}
              >
                WHY CHOOSE US!
              </span>
              <span
                className={`${active && "active"}`}
                onClick={() => setActive(!active)}
              >
                CONTACT US
              </span>
            </div>
            <p className={`tab-item ${!active && "active"}`}>
              UY LAB Has Been Providing Our Services With World-Class Quality
              And Has Numerous Satisfied Clients. We Have Designed All Of Our
              Training Courses Which Are Best Suited For The Students Of
              Bangladesh. But For That We Do Not Compromise The Quality Rather
              We Take Special Care Of Every Student Who Have IT Knowledge From
              Basic To Advanced. <br /> <br /> UY LAB Also Provides Internship
              And Scholarship Facilities To The Students Who Can Show Their
              Excellence. Our Trainers Guide Our Students To Make Them As A
              Professional Freelancer In The Freelancing Marketplaces. <br />
              <br /> We Guarantee Every One Of Our Speeches And Services Which
              Makes Us A Brand In The IT Industry Of Bangladesh
            </p>
            <form className={`tab-item ${active && "active"}`}>
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <textarea name="feedback" rows="12"></textarea>
              <button>SUBMIT</button>
            </form>
          </div>
        </Col>
      </Container>
    </AboutSection>
  );
};
export default AboutUs;
