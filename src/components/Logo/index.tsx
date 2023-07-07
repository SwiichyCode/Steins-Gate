import styled from "styled-components";
import Link from "next/link";
import { User } from "@/types/user";

const Container = styled.span<{ currentUser: any }>`
  position: relative;
  text-transform: uppercase;
  font-size: 2rem;
  font-family: "Anton", sans-serif;
  letter-spacing: 0.1rem;
  color: #f8f7f9;
  z-index: 200;

  a {
    text-decoration: none;
    color: ${({ currentUser }) => (currentUser ? "black" : "#f8f7f9")};
  }
`;

type Props = {
  currentUser: User | null;
};

export default function Logo({ currentUser }: Props) {
  return (
    <Container currentUser={currentUser}>
      <Link href="/">Steins Gate</Link>
    </Container>
  );
}
