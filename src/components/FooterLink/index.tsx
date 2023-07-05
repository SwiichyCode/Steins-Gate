import { BsDiscord } from "react-icons/bs";
import { IconContext } from "react-icons";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.footer`
  position: fixed;
  left: 64px;
  bottom: 64px;

  @media (max-width: 1180px) {
    left: 32px;
    bottom: 64px;
  }

  a {
    color: #f8f7f9;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #dc143c;
    }
  }
`;

export default function FooterLink() {
  return (
    <Container>
      <IconContext.Provider value={{ size: "24px" }}>
        <Link href="https://discord.gg/SUVnuBWm" target="_blank">
          <BsDiscord />
        </Link>
      </IconContext.Provider>
    </Container>
  );
}
