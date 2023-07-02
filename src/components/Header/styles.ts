import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  color: #f8f7f9;

  @media (max-width: 1180px) {
    padding: 0 32px;
  }
`;

export const HamburgerBtn = styled.button`
  border: none;
  background: transparent;
  color: #f8f7f9;
  cursor: pointer;
  z-index: 100;
`;
