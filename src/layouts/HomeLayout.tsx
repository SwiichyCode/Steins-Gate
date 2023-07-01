import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-image: url("/background_3.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 25%;
    height: 100%;
    background: #161013;
    z-index: 1;
  }
`;

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
