import styled from "styled-components";

export const StepperContainer = styled.div`
  padding-right: 16px;
`;

export const StepperList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 1.8rem;
`;

export const StepperItem = styled.li<{ step: number; id: number }>`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: ${({ step, id }) => (step === id ? "#dc143c" : "#fff")};

  &:hover {
    color: #dc143c;
  }
`;
