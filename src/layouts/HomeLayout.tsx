import { useSidebarStore } from "@/stores/sidebarStore";
import styled from "styled-components";

const Container = styled.div<{ sidebar: boolean }>`
  position: relative;
  height: 100vh;
  background-image: url("/background_3.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  overflow: ${({ sidebar }) => (sidebar ? "hidden" : "auto")};

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
  const sidebar = useSidebarStore((state) => state.sidebar);

  return <Container sidebar={sidebar}>{children}</Container>;
}
