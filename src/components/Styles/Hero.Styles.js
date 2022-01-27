import styled from "styled-components";
import banner from "../img/banner.png";

export const StyledHero = styled.div`
  height: 450px;
  background: url(${banner});
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    height: 500px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    height: 350px;
  }
  @media (max-width: 400px) {
    text-align: center;
  }
`;
