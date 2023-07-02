import styled from "styled-components";

export const Container = styled.nav`
  font-size: 24px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;

  ul {
    display: flex;
    gap: 32px;
  }

  a {
    position: relative;
    text-decoration: none;
    letter-spacing: 1px;
    color: #f8f7f9;

    &::after {
      content: "";
      display: block;
      height: 0.2rem;
      background: #f8f7f9;
      transform: scale(0);
      transition: transform 0.6s;
      transform-origin: right;
      animation: fade-in 0.6s;
    }

    &:hover::after {
      transform: scale(1);
      transform-origin: left;
    }

    @keyframes fade-in {
      0% {
        opacity: 0;
      }

      90% {
        opacity: 0.6;
      }

      100% {
        opacity: 1;
      }
    }
  }
`;
