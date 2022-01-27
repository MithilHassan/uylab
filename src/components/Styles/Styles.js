import styled from "styled-components";
import bg from "../img/img.png";

export const Section = styled.div`
  padding: ${({ NoPadding }) =>
    NoPadding ? "0rem 0rem 5rem 0rem" : "5rem 0rem"};
  background: ${({ theme }) => (theme.bg ? theme.bg : "#fff")};
  @media (max-width: 1024px) {
    padding: ${({ NoPadding }) =>
      NoPadding ? "0rem 0rem 3rem 0rem" : "3rem 0rem"};
  }
`;
export const Container = styled.div`
  max-width: ${({ Full }) => (Full ? "100vw" : "1200px")};
  width: 100%;
  display: flex;
  flex-direction: ${({ Column }) => Column && "column"};
  align-items: ${({ AlignStart }) => (AlignStart ? "flex-start" : "center")};
  justify-content: ${(props) =>
    (props.End && "flex-end") ||
    (props.Start && "flex-start") ||
    (props.Center && "center") ||
    "space-between"};
  padding: 1rem;
  margin: 0 auto;
  gap: 1rem;
  @media (max-width: 1024px) {
    flex-direction: ${({ Mobile }) => Mobile && "column"};
    flex-wrap: ${({ Wrap }) => Wrap && "wrap"};
    gap: 2rem;
  }
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.75rem;
`;
export const CardWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 0rem 1rem;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    display: ${({ Responsive }) => Responsive && "none"};
    & > * {
      width: 50%;
    }
  }
  @media (max-width: 768px) {
    & > * {
      width: 100%;
    }
  }
`;

export const Background_img = styled.div`
  background: url(${({ BG }) => BG && bg});
  background-repeat: no-repeat;
  background-position: right;
  @media (max-width: 768px) {
    background-position: left;
  }
`;
export const Title = styled.h1`
  text-align: ${({ center }) => center && "center"};
  font-size: 3.5rem;
  font-weight: 300;
  span {
    font-weight: 400;
    font-size: 3.5rem;
  }
  @media (max-width: 1024px) {
    padding-bottom: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    span {
      font-size: 2.5rem;
    }
  }
`;
export const SubTitle = styled.p`
  text-align: ${({ center }) => center && "center"};
  font-size: 1.25rem;
  font-weight: 300;
  margin: ${({ center }) => center && "0 auto"};
  width: 80%;
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.clr && theme.clr};
  @media (max-width: 1024px) {
    display: ${({ None }) => None && "none"};
  }
`;
export const Banner = styled.div`
  display: flex;
  align-items: center;
  background: #0d5dd1;
  width: 100%;
  article {
    padding: 2rem;
  }
  img {
    width: 30%;
  }
`;
export const Input = styled.input`
  font-size: 0.9rem;
  padding: 1rem;
  width: 100%;
  border: 1px solid #f0f2f5;
  &:focus {
    background: #fff;
    outline: 1px solid #f0f2f5;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
export const VideoLinks = styled(FlexBox)`
  flex-direction: column;
  width: 30%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const Box = styled(FlexBox)`
  background: #0d5dd1;
  width: 100%;
  padding: 1rem;
  color: #fff;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  button {
    width: 100%;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 50px;
    font-size: 1.75rem;
    font-weight: 600;
    color: #fff;
    background: #0d5dd1;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const FormInput = styled(Input)`
  width: 500px;
  border: 1px solid #0d5dd1;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Dropdown = styled.div`
  width: 450px;
  padding: 1rem;
  background: #f0f2f5;
  border: 1px solid #0d5dd1;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  input {
    border: none;
    background: transparent;
    font-size: 1rem;
    color: #555;
    pointer-events: none;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  display: none;
  background: #fff;
  width: 100%;
  position: absolute;
  bottom: 100%;
  left: 0;
  border-radius: 5px;
  border: 1px solid #0d5dd1;
  &.active {
    display: block;
  }
`;

export const Item = styled.div`
  padding: 0.8rem;
  background: ${({ active }) => active && "#ddd"};
  &:hover {
    background: #0073aa;
    color: #fff;
    cursor: pointer;
  }
`;
export const Line = styled.div`
  width: 250px;
  height: 1px;
  background: #000;
  margin: 1rem auto;
`;
export const SliderContainer = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  padding: 1rem;
  .item {
    padding: 0rem 1rem;
    img {
      width: 100%;
      height: auto;
    }
  }
`;
export const Column = styled.div`
  width: ${({ theme }) => theme.width && theme.width};
  color: ${({ theme }) => theme.clr && theme.clr};
  h3 {
    margin-bottom: 1rem;
  }
  @media (max-width: 1024px) {
    width: ${({ theme }) => theme.width && "48%"};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  line-height: 1rem;
  h4 {
    font-family: "montserrat";
    font-size: 0.9rem;
  }
  span {
    font-size: 0.75rem;
  }
`;

export const Logo = styled.img`
  height: min(45px, 10vw);
`;

export const SearchBox = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  input {
    padding: 1rem;
    background: #f0f2f5;
    border: none;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: auto;
    display: ${({ Responsive }) => Responsive && "none"};
  }
`;
export const Button = styled.button`
  display: grid;
  place-items: center;
  height: 50px;
  width: ${(props) =>
    (props.XL && "450px") ||
    (props.Big && "260px") ||
    (props.Medium && "180px") ||
    "120px"};
  background: ${({ theme }) => (theme.bg ? theme.bg : "transparent")};
  color: ${({ theme }) => (theme.clr ? theme.clr : "transparent")};
  border: none;
  border: ${({ theme }) => theme.border && theme.border};
  border-radius: 25px;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) =>
    (props.XL && "1.5rem") || (props.Big && "1.75rem") || "1rem"};
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  span {
    z-index: 2;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    bottom: 0;
    width: 100%;
    background: ${({ theme }) => theme.hover && theme.hover};
    transition: 0.5s;
  }
  &:hover::before {
    left: 0;
  }
  @media (max-width: 768px) {
    width: ${(props) => props.XL && "100%"};
  }
  @media (max-width: 400px) {
    margin: 0 auto;
  }
`;
export const Flex = styled(FlexBox)`
  width: 80%;
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const Article = styled.article`
  width: min(1200px, 100vw);
  padding: 3rem 0rem;
  h1 {
    font-size: 3.25rem;
    font-weight: 400;
    color: ${({ theme }) => (theme.bg ? theme.bg : "white")};
    span {
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 3.2rem;
    }
  }
  p {
    color: white;
    font-size: 1.25rem;
    margin: 1rem 0rem;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 2.85rem;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.4rem;
      span {
        font-size: 2.25rem;
      }
    }
    p {
      font-size: 1rem;
    }
  }
`;
export const Card = styled.div`
  width: 25%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  background: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  transition: 1s;
  img {
    height: ${({ theme }) => (theme.height ? theme.height : "50px")};
    cursor: pointer;
  }
  h3 {
    font-weight: 400;
  }
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1024px) {
    width: 50%;
    img {
      height: ${({ theme }) => theme.height && "150px"};
    }
    h3 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Iframe = styled.iframe`
  width: 70%;
  height: 400px;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    height: 200px;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin: 2rem auto;
  gap: 2%;

  & > * {
    width: 32%;
    border: ${({ Border }) => Border && "1px solid gray"};
    margin-bottom: 2rem;
    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 1rem;
      cursor: pointer;
    }
    .btn {
      display: block;
      background: #2ba6de;
      padding: 1.25rem;
      font-size: 1rem;
      color: #fff;
      text-align: center;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        background: #2795c7;
      }
    }
    .rating {
      display: flex;
      justify-content: flex-end;
      padding-top: 1rem;
      border-top: 1px solid gray;
      img {
        height: 1rem;
        width: auto;
        margin-right: auto;
      }
      span {
        font-size: 1rem;
        font-weight: 500;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }
  }
  @media (max-width: 768px) {
    & > * {
      flex: 1 1 48%;
    }
  }
  @media (max-width: 600px) {
    & > * {
      flex: 1 1 100%;
    }
  }
`;
export const AdmitForm = styled.form`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  font-family: "Roboto";
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  p,
  input {
    font-size: 1rem;
    margin-top: 0.25rem;
  }
  input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 10px;
    border: 1px solid #aaa;
    background: #eceff1;
  }
  input[type="radio"] {
    width: auto;
    margin-right: 0.5rem;
  }
  div {
    width: 45%;
  }
  div:nth-child(1) {
    width: 94%;
  }
  button {
    width: 94%;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 50px;
    font-size: 1.75rem;
    font-weight: 600;
    color: white;
    background: #9000ff;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      background: #dddddd;
    }
  }
  .flex {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    & > * {
      flex: 1 1 48%;
    }
    p {
      flex-basis: 100%;
    }
    label {
      color: #aaa;
    }
  }
`;
export const StyledVerify = styled.div`
  max-width: 500px;
  width: 100%;
  h2 {
    font-family: "Montserrat";
    margin-bottom: 1rem;
  }
  div {
    display: flex;
  }
  @media (max-width: 450px) {
    div {
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
  }
`;
export const Btn = styled.a`
  padding: 1rem 1.75rem;
  background: #2ba6de;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
`;
export const StyledCart = styled.div`
  width: 100%;
  p {
    padding: 1.5rem;
    border: 5px solid #457992;
    font-weight: 700;
    font-size: 0.9rem;
    font-family: "Montserrat";
    margin-bottom: 3rem;
  }
`;
export const StyledContact = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  line-height: 1.5rem;
  gap: 1.5rem;
  .row {
    flex: 1 1 48%;
    padding: 0rem 1rem;
  }
  .col {
    padding: 2rem 0rem;
    border-top: 1px solid #aaa;
  }
  h2 {
    font-family: "Montserrat";
    margin-bottom: 2rem;
    color: #273044;
  }
  .flex {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }
  .flexbox {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    & > * {
      flex: 1 1 50%;
    }
    .half {
      flex-basis: 70%;
    }
  }
  span {
    font-size: 1rem;
    font-weight: 600;
  }
  p {
    color: #aaa;
    font-size: 0.9rem;
    font-weight: 300;
  }
  form {
    margin-top: 2rem;
    display: flex;
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
  .Contact_Form {
    flex-basis: 100%;
    display: flex;
    gap: 5rem;
    flex-wrap: wrap;
    padding: 1rem;
    .col {
      flex: 1 1 100%;
    }
    .col:nth-child(1) {
      flex-basis: 60%;
    }
    .col:nth-child(2) {
      flex-basis: 30%;
    }
  }
  .contact {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .flex {
      flex-wrap: wrap;
    }
    .authority {
      font-size: 0.8rem;
      color: #aaa;
    }
    p {
      color: #000;
    }
  }
`;
export const VideoGallery = styled.div`
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  & > * {
    flex: 1 1 32%;
  }
  .video {
    flex: 100%;
    height: 40vw;
  }
  .video {
    margin-bottom: 5rem;
  }
  .bg {
    height: min(200px, 17vw);
    background-size: cover;
    background-position: center;
    cursor: pointer;
    position: relative;
    img {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      height: 40px;
      transition: 0.5s ease;
    }
    &:hover {
      img {
        opacity: 1;
        top: 50%;
      }
    }
  }
  p {
    font-size: 0.8rem;
    text-align: center;
    padding: 0.5rem 0.5rem 2rem;
  }
  @media (max-width: 768px) {
    & > * {
      flex: 1 1 48%;
    }
    .bg {
      height: min(200px, 25vw);
    }
  }
`;
export const Heading = styled.h1`
  font-family: "Montserrat";
  font-size: 2.25rem;
  padding: 3rem;
  text-align: center;
  background: #457992;
  color: #fff;
`;
export const SliderCard = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  .card {
    padding: 3rem 1rem;
    margin: 1rem 0rem;
    border-radius: 10px;
    transition: 0.5s;
    text-align: center;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }
  }
  .img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  p {
    font-weight: 500;
    font-size: 1rem;
    margin: 0.5rem 0rem;
  }
  .rating {
    height: 20px;
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    .img {
      height: 150px;
      width: 150px;
    }
  }
  @media (max-width: 480px) {
    .img {
      height: 180px;
      width: 180px;
    }
  }
`;
