import styled from "styled-components";
export const StyledFooter = styled.div`
  padding: 4rem 0rem;
  line-height: 1.5rem;
  color: #636e72;
  position: ${({ pathname }) => pathname === "/" && "sticky"}${({ pathname }) => pathname === "/" && "-webkit-sticky"};
  position: ${({ pathname }) => pathname === "/" && "sticky"};
  bottom: 0;
  background: #fff;
  z-index: -100;
  border-top: 1px solid #ddd;
  h3 {
    color: black;
    font-family: "montserrat";
  }
  ul {
    display: grid;
    grid-template-columns: 50% 1fr;
    span {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 1024px) {
    position: static;
    p {
      font-size: 1rem;
    }
    ul {
      span {
        font-size: 1rem;
        line-height: 2rem;
      }
    }
  }
  @media (max-width: 400px) {
    ul,
    span {
      display: block;
    }
  }
`;
