import styled from "styled-components";

export const Auth = styled.div`
  flex: 1 1 50%;
  form {
    min-height: 350px;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    label {
      font-size: 0.8rem;
    }
  }
  .login {
    background: #385bce;
    .input,
    .btn {
      width: 100%;
    }
    .input {
      input {
        margin-top: 0.5rem;
      }
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      div {
        display: flex;
        align-items: center;
        gap: 1rem;
        input {
          height: 1.5rem;
          width: 1.5rem;
        }
        a {
          font-weight: 500;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    label {
      color: #fff;
    }
  }
  .signup {
    background: #eef1f7;
    .input {
      flex: 1 1 48%;
      input {
        margin-top: 0.5rem;
      }
    }
    .btn {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
  @media (max-width: 480px) {
    .btn {
      justify-content: flex-start !important;
      span {
        margin: 0;
      }
    }
  }
`;
