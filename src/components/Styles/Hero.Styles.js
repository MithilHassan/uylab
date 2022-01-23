import styled from "styled-components";
import banner from "../img/banner.png";

export const StyledHero = styled.div`
  height: 65vh;
  background: url(${banner});
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    height: 70vh;
  }
  @media (max-width: 768px) {
    height: 50vh;
  }
  @media (max-width: 400px) {
    text-align: center;
  }
`;
