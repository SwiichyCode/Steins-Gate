import styled from "styled-components";

export const InputGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  svg {
    cursor: pointer;
  }

  svg:hover.icon-close {
    fill: red;
  }
`;
