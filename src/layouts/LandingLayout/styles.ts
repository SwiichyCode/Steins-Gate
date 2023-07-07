import styled from "styled-components";

export const Container = styled.div<{ router: string }>`
  position: relative;
  height: 100vh;
  background-image: url("/background_3.jpg");
  background-size: cover;
  background-position: ${({ router }) =>
    router === "/recrutement" ? "top right" : "top"};
  background-repeat: no-repeat;

  @media (max-width: 870px) {
    overflow: hidden;
  }

  &::after {
    content: "";
    position: absolute;
    right: ${({ router }) => (router === "/" ? "0" : null)};
    left: ${({ router }) => (router === "/recrutement" ? "0" : null)};
    top: 0;
    width: 25%;
    width: ${({ router }) => (router === "/" ? "25%" : "20%")};
    height: 100%;
    background: #161013;
    z-index: 1;

    @media (max-width: 1430px) {
      display: none;
    }
  }
`;
