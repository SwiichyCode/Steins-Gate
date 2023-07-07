import styled from "styled-components";

export const InputGeneratorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .input-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    svg {
      cursor: pointer;
    }
  }
  svg:hover.icon-close {
    fill: red;
  }
`;
