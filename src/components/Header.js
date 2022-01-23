import React, { useState } from "react";
import { NavMenu, SearchMenu } from "./Menu";
import { Link } from "react-router-dom";
import {
  Logo,
  SearchBox,
  Button,
  FlexBox,
  Container,
  Input,
} from "./Styles/Styles";
import {
  Nav,
  TopHeader,
  NavBar,
  Sidebar,
  Hamburger,
  Dropdown,
  DropdownContent,
  Icon,
  SearchBar,
  MobileSearch,
} from "./Styles/Header.Styles";
import logo from "../components/img/logo.png";
import search from "../components/img/search.png";
import user from "../components/img/user.png";
import bookmark from "../components/img/bookmark.png";
import close from "../components/img/close.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faPhone,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";
const Header = () => {
  const [activeNavMenu, setActiveNavMenu] = useState(false);
  const [activeSearchBar, setActiveSearchBar] = useState(false);
  const [activeLoginBar, setActiveLoginBar] = useState(false);
  const theme = {
    clr: "#fff",
    bg: "#2ba6de",
  };
  const iconsStyle = {
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  };
  return (
    <>
      <Nav clr="#333333">
        <Container End>
          <TopHeader>
            <div>
              <FontAwesomeIcon style={iconsStyle} icon={faPhone} />
              01783-838382 , 01906-600015
            </div>
            <div>
              <FontAwesomeIcon style={iconsStyle} icon={faMapMarkerAlt} />
              31 Mohakhali Commercial Area, Colombia Super Market, 4th Floor,
              Wireless Gate, 1213
            </div>
            <div>
              <FontAwesomeIcon style={iconsStyle} icon={faClock} /> 10.00 am -
              06.00 pm
            </div>
          </TopHeader>
        </Container>
      </Nav>
      <Nav clr="#2F4371">
        <Container End>
          <Hamburger onClick={() => setActiveNavMenu(!activeNavMenu)}>
            <FontAwesomeIcon icon={faBars} />
            <span>Menu</span>
          </Hamburger>
          <NavBar>
            <NavMenu />
          </NavBar>
          <Icons />
        </Container>
      </Nav>
      <Nav Border>
        <Container>
          <Logo src={logo} alt="logo" />
          <SearchBar>
            <SearchBox>
              <Dropdown>
                <FontAwesomeIcon icon={faBars} />
                <span>CATEGORY</span>
                <Content />
              </Dropdown>
              <Input type="search" placeholder="Search Courses" />
              <Icon theme={theme}>
                <img src={search} alt="search" />
              </Icon>
            </SearchBox>
            <Icon theme={{ clr: "#16B48A" }}>
              <img src={user} alt="icon" />
              <span>Log in</span>
            </Icon>
            <ThemeProvider theme={theme}>
              <Button>SIGN UP</Button>
            </ThemeProvider>
            <Icon Big>
              <img src={bookmark} alt="icon" />
            </Icon>
          </SearchBar>
          <MobileSearch>
            <Icon
              onClick={() => setActiveSearchBar(!activeSearchBar)}
              theme={theme}
            >
              <img src={search} alt="search" />
            </Icon>
            <Icon
              onClick={() => setActiveLoginBar(!activeLoginBar)}
              theme={{ clr: "#16B48A" }}
            >
              <img src={user} alt="icon" />
            </Icon>
          </MobileSearch>
        </Container>
      </Nav>
      <Sidebar className={`${activeNavMenu && "active"}`}>
        <img
          className="closeBtn"
          onClick={() => setActiveNavMenu(!activeNavMenu)}
          src={close}
          alt=""
        />
        <h3>MENU</h3>
        <NavMenu />
      </Sidebar>
      <Sidebar className={`${activeSearchBar && "active"}`}>
        <img
          className="closeBtn"
          onClick={() => setActiveSearchBar(!activeSearchBar)}
          src={close}
          alt=""
        />
        <h3>SEARCH</h3>
        <SearchBox>
          <Input type="search" placeholder="Search Courses" />
          <Icon theme={theme}>
            <img src={search} alt="search" />
          </Icon>
        </SearchBox>
        <SearchMenu />
      </Sidebar>
      <Sidebar className={`${activeLoginBar && "active"}`}>
        <img
          className="closeBtn"
          onClick={() => setActiveLoginBar(!activeLoginBar)}
          src={close}
          alt=""
        />
        <h3>LOGIN/SIGN UP</h3>
        <li>COURSES</li>
        <li>FAVOURITES</li>
      </Sidebar>
    </>
  );
};
const Icons = () => {
  const iconsStyle = {
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  };
  return (
    <FlexBox>
      <a href="https://www.facebook.com/uylab/">
        <FontAwesomeIcon style={iconsStyle} icon={faFacebook} />
      </a>
      <a href="https://www.linkedin.com/company/uylab/">
        <FontAwesomeIcon style={iconsStyle} icon={faLinkedin} />
      </a>
      <a href="https://www.youtube.com/channel/UCh6Ca9gBEnkg0NZc5Q1Jsqw">
        <FontAwesomeIcon style={iconsStyle} icon={faYoutube} />
      </a>
    </FlexBox>
  );
};

const Content = () => {
  return (
    <DropdownContent>
      <li>
        <Link to="/">OFFLINE COURSES</Link>
        <Offline />
      </li>
      <li>
        <Link to="/">ONLINE COURSES</Link>
        <Online />
      </li>

      <li>
        <Link to="/">PRE-RECORDED COURSES</Link>
        <PreRecorded />
      </li>
      <li>
        <Link to="/">TRAINING WITH BITM</Link>
      </li>
      <li>
        <Link to="/">TRAINING WITH PSKF</Link>
      </li>
    </DropdownContent>
  );
};

const Offline = () => {
  return (
    <div className="item">
      <li>DIGITAL MARKETING</li>
      <li>GRAPHICS DESIGN</li>
      <li>OTHERS</li>
      <li>UI/UX DESIGN</li>
      <li>VIDEO EDITING</li>
      <li>WEB DESIGN</li>
      <li>WEB DEVELOPMENT</li>
    </div>
  );
};
const Online = () => {
  return (
    <div className="item">
      <li>DIGITAL MARKETING</li>
      <li>GRAPHICS DESIGN</li>
      <li>MICROSOFT OFFICE</li>
      <li>VIDEO EDITING</li>
      <li>WEB DESIGN</li>
      <li>WEB DEVELOPMENT</li>
    </div>
  );
};
const PreRecorded = () => {
  return (
    <div className="item">
      <li>APP DEVELOPMENT</li>
      <li>DIGITAL MARKETING</li>
      <li>ENGLISH</li>
      <li>FREELANCING</li>
      <li>GRAPHIC DESIGN</li>
      <li>PERSONAL DEVELOPMENT</li>
      <li>UI UX</li>
      <li>VIDEO EDITING</li>
      <li>WEB DESIGN</li>
      <li>WEB DEVELOPMENT</li>
      <li>WORDPRESS</li>
    </div>
  );
};
export default Header;
