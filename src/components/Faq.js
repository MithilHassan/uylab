import {
  Section,
  Title,
  SubTitle,
  Form,
  FormInput,
  Content,
  Item,
  Dropdown,
  Container,
  Button,
  Background_img,
} from "./Styles/Styles";
import CaretUp from "./img/caret-up.png";
import CaretDown from "./img/caret-down.png";
import { useState } from "react";
const Faq = () => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("Select Your Subject");
  const clickHandler = (e) => {
    setValue(e.target.innerText);
  };
  const theme = {
    clr: "#FFF",
    bg: "#0D5DD1",
  };

  return (
    <Section>
      <Background_img BG>
        <Container Column AlignStart>
          <Title>
            HAVE ANY <span>QUESTION?</span>
          </Title>
          <SubTitle None>
            DROP YOUR DETAILS HERE, OUR TEAM WILL COMUNICATE ASAP.
          </SubTitle>
          <Form>
            <FormInput type="text" placeholder="Your Full Name (required)" />
            <FormInput type="tel" placeholder="Your Mobile (required)" />
            <FormInput type="email" placeholder="Your Email (required)" />
            <Dropdown onClick={() => setToggle(!toggle)}>
              <input type="text" value={value} />
              <img
                height="20px"
                src={toggle ? CaretUp : CaretDown}
                alt="icon"
              />
              <Content className={`${toggle && "active"}`}>
                <Item onClick={clickHandler} active>
                  Select Your Subject
                </Item>
                <Item onClick={clickHandler}>Graphic Design</Item>
                <Item onClick={clickHandler}>Web Design</Item>
                <Item onClick={clickHandler}>Digital Marketing</Item>
                <Item onClick={clickHandler}>Video Editing</Item>
              </Content>
            </Dropdown>
            <Button XL theme={theme}>
              SUBMIT
            </Button>
          </Form>
        </Container>
      </Background_img>
    </Section>
  );
};

export default Faq;
