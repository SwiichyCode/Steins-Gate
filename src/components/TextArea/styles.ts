import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const StyledTextArea = styled.textarea<{ theme: "light" | "dark" }>`
  min-height: 11.2rem;
  font-weight: var(--font-medium);
  font-size: var(--fz-lg);
  line-height: 2.3rem;
  color: var(--color-black);
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  border: ${({ theme }) =>
    theme === "light" ? "1px solid black" : "1px solid white"};
  border-radius: 8px;
  resize: none;
  padding: 0.8rem 2.5rem 0 1.6rem;
  background: transparent;

  &::placeholder {
    color: var(--color-grey-200);
  }

  &:focus {
    outline: 1px solid var(--main-purple);
    box-shadow: 0px 0px 1.5rem -2px var(--color-purple);
  }
`;
