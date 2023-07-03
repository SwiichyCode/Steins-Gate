import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-image: url("/background_3.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 870px) {
    overflow: hidden;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 25%;
    height: 100%;
    background: #161013;
    z-index: 1;

    @media (max-width: 1430px) {
      display: none;
    }
  }
`;

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return <Container>{children}</Container>;
}
