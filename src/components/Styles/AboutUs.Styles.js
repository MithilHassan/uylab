import styled from "styled-components";
import { Section } from "./Styles";
export const AboutSection = styled(Section)`
  line-height: 2rem;
  h1 {
    font-family: "Montserrat";
    color: #273044;
  }
  p {
    font-family: "Montserrat";
    color: #273044;
    font-size: 0.9rem;
    margin: 1rem 0rem;
  }
  .border {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-left: 2px solid #273044;
    padding: 1.5rem;
  }
  ul {
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    height: auto;
  }
  .btns {
    display: flex;
    border-top: 3px solid #2ba6de;
    span {
      width: 50%;
      font-size: 1rem;
      font-weight: 500;
      text-align: center;
      padding: 0.5rem;
      cursor: pointer;
      &.active {
        background: #2ba6de;
        color: #fff;
      }
    }
  }
  .tab-item {
    display: none;
    &.active {
      display: flex;
    }
  }
  form {
    margin-top: 2rem;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    & > * {
      flex: 1 1;
    }
    textarea {
      flex-basis: 100%;
    }
    input {
      flex-basis: 47%;
    }
    input {
      padding: 1rem;
      border: none;
      background: #f0f2f5;
      &:focus {
        background: #fff;
        outline: 2px solid #f0f2f5;
      }
      &:focus::placeholder {
        color: transparent;
      }
    }
    textarea {
      width: 100%;
      background: #f0f2f5;
      border: none;
      &:focus {
        background: #fff;
        outline: 2px solid #f0f2f5;
      }
      &:focus::placeholder {
        color: transparent;
      }
    }
    button {
      width: 100%;
      background: #0d5dd1;
      font-size: 1.7rem;
      font-weight: 600;
      color: white;
      padding: 0.5rem;
      border-radius: 50px;
      font-family: "Montserrat";
      border: none;
      cursor: pointer;
    }
  }
`;
export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
`;
export const Col = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  & > * {
    flex: 1 1;
    flex-basis: ${({ theme }) => (theme.width ? theme.width : "100%")};
  }
  @media (max-width: 768px) {
    & > * {
      flex-basis: 100%;
    }
  }
`;
