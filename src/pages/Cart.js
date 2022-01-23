import {
  Container,
  Section,
  StyledCart,
  Btn,
} from "../components/Styles/Styles";
const Cart = () => {
  return (
    <Section>
      <Container>
        <StyledCart>
          <p>YOUR CART IS CURRENTLY EMPTY.</p>
          <Btn>RETURN TO SHOP</Btn>
        </StyledCart>
      </Container>
    </Section>
  );
};
export default Cart;
