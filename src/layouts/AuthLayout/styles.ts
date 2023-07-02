import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background-image: url("/background_3.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

export const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  height: 95px;
  padding: 64px;
`;
