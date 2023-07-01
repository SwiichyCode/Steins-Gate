import styled from "styled-components";
import Link from "next/link";

const Container = styled.span`
  text-transform: uppercase;
  font-size: 2rem;
  font-family: "Anton", sans-serif;
  letter-spacing: 0.1rem;
  color: #f8f7f9;

  a {
    text-decoration: none;
    color: #f8f7f9;
  }
`;

export default function Logo() {
  return (
    <Container>
      <Link href="/">Steins Gate</Link>
    </Container>
  );
}
