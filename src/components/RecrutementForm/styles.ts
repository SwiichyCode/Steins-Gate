import styled from "styled-components";

export const Form = styled.form`
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 80px;
`;

export const FormSectionWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FormLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: black;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
