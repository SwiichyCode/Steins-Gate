import styled from "styled-components";

export const MultiStepFormContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1500px;
  justify-content: space-between;
  z-index: 200;
  color: white;
  margin-top: 8rem;
  padding: 0 64px;
`;

export const FormLayoutContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #161013;
  border-radius: 8px;
  padding: 24px;
`;

export const FormLayoutFooter = styled.div<{ step: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: ${({ step }) => (step === 1 ? "flex-end" : "space-between")};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;
