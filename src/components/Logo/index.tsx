import styled from "styled-components";

const Container = styled.span`
  text-transform: uppercase;
  font-size: 2rem;
  font-family: "Anton", sans-serif;
  letter-spacing: 0.1rem;
`;

export default function Logo() {
  return <Container>Steins Gate</Container>;
}
