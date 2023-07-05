import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  a {
    color: #f8f7f9;
  }
`;

export const SuccessMessage = styled.p`
  color: #2edb3d;
`;

export const ErrorMessage = styled.p`
  color: #ed2d2d;
`;
