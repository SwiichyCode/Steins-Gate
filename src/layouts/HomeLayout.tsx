import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return <Container>{children}</Container>;
}
