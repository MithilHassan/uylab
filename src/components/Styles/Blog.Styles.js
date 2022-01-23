import styled from "styled-components";

export const StyledBlog = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2,
  p {
    color: #fff;
  }
  h2 {
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
  }
  span {
    color: #ccc;
  }
`;
