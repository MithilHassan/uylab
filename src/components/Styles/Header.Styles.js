import styled from "styled-components";
export const Nav = styled.div`
  width: 100vw;
  background: ${({ clr }) => (clr ? clr : "#fff")};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ Border }) => Border && "1px solid #ddd"};
`;
export const TopHeader = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  font-family: "Montserrat";
  font-size: 0.75rem;
  div {
    display: flex;
    gap: 1rem;
    margin-left: 1rem;
  }
  @media (max-width: 1024px) {
    div:nth-child(3) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    div:nth-child(2) {
      display: none;
    }
    div:nth-child(3) {
      display: flex;
    }
  }
`;

export const NavBar = styled.ul`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MobileSearch = styled.div`
  display: none;
  gap: 1rem;
  @media (max-width: 768px) {
    display: flex;
    & > * {
      background: ${({ theme }) => (theme.bg ? theme.bg : "#424242")};
      border-radius: 50%;
    }
  }
`;
export const Sidebar = styled.div`
  position: fixed;
  display: none;
  padding: 2rem;
  top: 0;
  right: -100%;
  width: 100%;
  opacity: 0;
  max-width: 400px;
  height: 100%;
  background: #eef1f7;
  transition: 1s;
  z-index: 100;
  h3 {
    font-size: 1.75rem;
    font-weight: 400;
  }
  .closeBtn {
    cursor: pointer;
    position: absolute;
    height: 40px;
    top: 5px;
    left: -50px;
  }
  li {
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem;
    background: #fff;
    color: #000;
    margin: 5px 0px;
    &:hover {
      color: #de9b37;
    }
    a {
      color: ;
      font-size: 1rem;
      font-weight: 600;
    }
  }
  input {
    background: #fff;
    margin: 1rem 0rem;
  }
  &.active {
    right: 0;
    opacity: 1;
    display: block;
  }
  @media (min-width: 769px) {
    &.active {
      right: -100%;
      opacity: 0;
      display: none;
    }
  }
  @media (max-width: 450px) {
    .closeBtn {
      position: relative;
      left: 0;
      top: -10px;
    }
  }
`;

export const Hamburger = styled.div`
  color: #fff;
  font-size: 0.8rem;
  display: none;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 0.5rem;
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const Dropdown = styled.div`
  display: flex;
  gap: 0.5rem;
  background: #d9dfe9;
  color: #767676;
  padding: 1.05rem;
  cursor: pointer;
  &:hover > ul {
    display: flex;
  }
  @media (max-width: 1024px) {
    span {
      display: none;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DropdownContent = styled.ul`
  position: absolute;
  top: 98%;
  background: #fff;
  left: 0;
  width: 260px;
  transition: 0.5s;
  display: none;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  li {
    padding: 1rem 0.5rem;
    &:hover {
      background: #2ba6de;
      a {
        color: #fff;
      }
    }
  }
  li:nth-child(1) {
    &:hover > .item {
      display: flex;
    }
  }
  li:nth-child(2) {
    &:hover > .item {
      display: flex;
    }
  }
  li:nth-child(3) {
    &:hover > .item {
      display: flex;
    }
  }
  li {
    .item {
      position: absolute;
      top: 0;
      left: 98%;
      background: #fff;
      transition: 0.5s;
      width: 400px;
      display: none;
      flex-wrap: wrap;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      & > * {
        flex: 1 1 50%;
      }
      li {
        padding: 1rem 0.5rem;
        &:hover {
          background: #2ba6de;
          color: #fff;
        }
      }
    }
  }
  a {
    color: #000;
    padding: 1rem;
  }
`;
export const Icon = styled.div`
  display: flex;
  padding: 0.95rem;
  background: ${({ theme }) => theme.bg && theme.bg};
  color: ${({ theme }) => theme.clr && theme.clr};
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  img {
    height: ${(props) => (props.Big ? "1.5rem" : "1.2rem")};
  }
  span {
    width: max-content;
  }
  @media (max-width: 1024px) {
    span {
      display: none;
    }
  }
`;
