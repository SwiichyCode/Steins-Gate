import { BsDiscord } from "react-icons/bs";
import { IconContext } from "react-icons";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.footer`
  position: fixed;
  left: 64px;
  bottom: 64px;
`;

export default function FooterLink() {
  return (
    <Container>
      <IconContext.Provider value={{ color: "#F8F7F9", size: "24px" }}>
        <Link href="https://discord.gg/jxF7XVeNTK" target="_blank">
          <BsDiscord />
        </Link>
      </IconContext.Provider>
    </Container>
  );
}
