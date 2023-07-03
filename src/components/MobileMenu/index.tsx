import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import styled from "styled-components";

const Container = styled.div<{ sidebar: boolean }>`
  position: absolute;
  right: ${({ sidebar }) => (sidebar ? "0" : "-300px")};
  top: 0;
  display: flex;
  width: ${({ sidebar }) => (sidebar ? "300px" : "0")};
  height: 100vh;
  background: #161013;
  opacity: ${({ sidebar }) => (sidebar ? "1" : "0")};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

type Props = {
  sidebar: boolean;
  toggleSidebar: () => void;
};

export default function MobileMenu({ sidebar, toggleSidebar }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    if (sidebar) {
      toggleSidebar();
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  return <Container ref={ref} sidebar={sidebar}></Container>;
}
