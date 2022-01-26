import { Section, Container, Button, Input } from "../components/Styles/Styles";
import { Auth } from "../components/Styles/Login.Styles";
import { ThemeProvider } from "styled-components";
const LogIn = () => {
  const theme = {
    clr: "#fff",
    bg: "#17d292",
    hover: "#15BD83",
  };
  return (
    <Section>
      <Container Wrap>
        <Auth>
          <h2>Login</h2>
          <form className="login" action="">
            <div className="input">
              <label htmlFor="username">USERNAME/EMAIL </label>
              <Input
                type="text"
                id="username"
                placeholder="Enter username or email"
              />
            </div>
            <div className="input">
              <label htmlFor="password">PASSWORD </label>
              <Input type="text" id="password" placeholder="Enter password" />
            </div>
            <div className="btn">
              <div>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember me</label>
                <a href="#">Lost Password</a>
              </div>
              <ThemeProvider theme={theme}>
                <Button>
                  <span>LOGIN</span>
                </Button>
              </ThemeProvider>
            </div>
          </form>
        </Auth>
        <Auth>
          <h2>Sign Up</h2>
          <form className="signup" action="">
            <div className="input">
              <label htmlFor="userName">USERNAME</label>
              <Input type="text" id="userName" placeholder="Enter username" />
            </div>
            <div className="input">
              <label htmlFor="email">E-MAIL</label>
              <Input type="text" id="email" placeholder="Enter your E-mail" />
            </div>
            <div className="input">
              <label htmlFor="Password">PASSWORD</label>
              <Input
                type="password"
                id="Password"
                placeholder="Enter password"
              />
            </div>
            <div className="input">
              <label htmlFor="confirmPassword">PASSWORD AGAIN</label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
              />
            </div>
            <div className="btn">
              <ThemeProvider theme={theme}>
                <Button>
                  <span>REGISTER</span>
                </Button>
              </ThemeProvider>
            </div>
          </form>
        </Auth>
      </Container>
    </Section>
  );
};

export default LogIn;
