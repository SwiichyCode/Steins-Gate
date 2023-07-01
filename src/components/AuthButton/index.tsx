import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  text?: string;
  backgroundcolor: string;
  color: string;
  icon?: string | JSX.Element;
  href: string;
  onClick?: () => void;
};

const Container = styled.button<{ backgroundcolor: string }, { color: string }>`
  width: auto;
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
  padding: 0 20px;
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
  onClick,
}: Props) {
  return (
    <Container
      backgroundcolor={backgroundcolor}
      color={color}
      onClick={onClick}
    >
      <Link href={href}>
        {text} {icon && icon}
      </Link>
    </Container>
  );
}
