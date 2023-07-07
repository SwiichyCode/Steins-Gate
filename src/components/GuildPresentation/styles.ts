import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.2rem;
  }

  a {
    color: white;
  }
`;
