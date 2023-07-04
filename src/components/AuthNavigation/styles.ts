import styled from "styled-components";

export const Container = styled.ul<{ sidebar: boolean }>`
  display: flex;
  gap: 32px;
  z-index: 100;

  @media (max-width: 1180px) {
    gap: 16px;
  }

  //Temporary
  @media (max-width: 870px) {
    display: none;
  }
`;
