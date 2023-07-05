import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fefef6;
`;

export default function RecrutementLayout({ children }: Props) {
  return <Container>{children}</Container>;
}
