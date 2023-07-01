import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 680px;
  padding: 164px 64px;
  box-sizing: content-box;

  h1 {
    font-size: 80px;
    color: #dc143c;
    text-transform: uppercase;
    line-height: 1.5;
    font-family: "Anton", sans-serif;
  }

  p {
    font-size: 21px;
    line-height: 1.4;
    color: #fff;
    margin-bottom: 80px;
  }

  button {
    width: auto;
    height: 63px;
    border: none;
    /* box-shadow: 0px 10px 42px -3px rgba(220, 20, 60, 0.7); */
    font-family: "Anton", sans-serif;
    font-size: 24px;
    color: #f8f7f9;
    background-color: #dc143c;
    border-radius: 8px;
    cursor: pointer;
    letter-spacing: 1px;
    padding: 0 32px;
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 0px 10px 42px -3px rgba(220, 20, 60, 0.7);
    }
  }
`;
