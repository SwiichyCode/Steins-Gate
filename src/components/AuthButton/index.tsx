import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  text: string;
  backgroundcolor: string;
  color: string;
  icon?: string;
  href: string;
};

const Container = styled.button<{ backgroundcolor: string }, { color: string }>`
  width: 131px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: none;
  border-radius: 5px;
  color: ${({ color }) => color};
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ color }) => color};
  }
`;

export default function AuthButton({
  text,
  icon,
  backgroundcolor,
  color,
  href,
}: Props) {
  return (
    <Container backgroundcolor={backgroundcolor} color={color}>
      {icon && <Image src={icon} width={16} height={16} alt="" />}
      <Link href={href}>{text}</Link>
    </Container>
  );
}
