import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div<{ sidebar: boolean; width: number }>`
  position: absolute;
  right: ${({ sidebar }) => (sidebar ? "0" : "-300px")};
  top: 0;
  display: flex;
  flex-direction: column;
  width: ${({ sidebar }) => (sidebar ? "300px" : "0")};
  height: 100vh;
  background: #161013;
  opacity: ${({ sidebar }) => (sidebar ? "1" : "0")};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  padding-left: 32px;
  gap: 32px;
`;

export const NavbarHeader = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #f8f7f9;
  font-size: 36px;
`;
