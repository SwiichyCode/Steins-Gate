import styled from "styled-components";
import { InputProps } from "./types";

export const Container = styled.div<Partial<InputProps>>`
  width: 100%;
  max-width: ${(props) => (props.maxW ? `${props.maxW}px` : "initial")};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Error = styled.span`
  font-weight: var(--font-bold);
  font-size: var(--fz-xxs);
  line-height: 1.5rem;
  color: var(--color-red);
`;

export const StyledInput = styled.input<Partial<InputProps>>`
  width: 100%;
  background: transparent;
  border: none;
  font-weight: 500;
  font-size: var(--fz-lg);
  line-height: 2.3rem;
  padding: 8px 16px 9px 16px;
  border-radius: 8px;
  color: #f8f7f9;
  border: ${({ error }) =>
    error ? "1px solid var(--color-red)" : "1px solid #f8f7f9;"};
  &:focus {
    outline: ${({ error }) =>
      error ? "1px solid var(--color-red)" : "1px solid var(--color-purple)"};
    box-shadow: ${({ error }) =>
      error
        ? "0px 0px 15px -2px var(--color-red)"
        : "0px 0px 15px -2px var(--color-purple)"};
  }
  &::placeholder {
    color: var(--color-grey-200);
  }
`;

export const StyledLabel = styled.label`
  font-weight: var(--font-bold);
  font-size: var(--fz-lg);
  line-height: 1.5rem;
  color: var(--color-grey);
  text-transform: capitalize;
`;
