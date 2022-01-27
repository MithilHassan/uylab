import { Section, Container, StyledVerify } from "../components/Styles/Styles";
import { Link } from "react-router-dom";
const WishList = () => {
  return (
    <Section>
      <Container>
        <StyledVerify>
          <h2>My WishList</h2>
          <p>
            Wishlist is empty.
            <Link to="/our-courses">View courses</Link>
          </p>
        </StyledVerify>
      </Container>
    </Section>
  );
};
export default WishList;
