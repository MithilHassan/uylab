import {
  Section,
  Container,
  StyledVerify,
  Btn,
  Input,
} from "../components/Styles/Styles";
const Verify = () => {
  return (
    <Section>
      <Container>
        <StyledVerify>
          <h2>Verify a certificate</h2>
          <div>
            <Input type="text" placeholder="Enter certificate code" />
            <Btn>CHECK CODE</Btn>
          </div>
        </StyledVerify>
      </Container>
    </Section>
  );
};
export default Verify;
