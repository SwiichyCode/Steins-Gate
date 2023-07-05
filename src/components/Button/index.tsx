import styled from "styled-components";

const StyledButton = styled.button<{ size?: "small" | "medium" | "large" }>`
  width: auto;
  height: ${({ size }) => {
    switch (size) {
      case "small":
        return "32px";
      case "medium":
        return "48px";
      case "large":
        return "64px";
      default:
        return "32px";
    }
  }};

  border: none;
  font-family: "Anton", sans-serif;
  font-size: 24px;
  color: #f8f7f9;
  background-color: #dc143c;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0 32px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 42px -3px rgba(220, 20, 60, 0.7);
  }
`;

type Props = {
  text: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({ text, size, onClick, type, disabled }: Props) {
  return (
    <StyledButton size={size} onClick={onClick} type={type} disabled={disabled}>
      {text}
    </StyledButton>
  );
}
