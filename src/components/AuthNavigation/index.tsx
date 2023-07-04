import styled from "styled-components";
import AuthButton from "../AuthButton";
import { useWindowSize } from "usehooks-ts";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BiUser, BiUserPlus } from "react-icons/bi";
import { useSidebarStore } from "@/stores/sidebarStore";
import { PAGE_URL } from "@/constants/page_url";
import * as S from "./styles";

export default function AuthNavigation() {
  const sidebar = useSidebarStore((state) => state.sidebar);
  const { width } = useWindowSize();
  return (
    <S.Container sidebar={sidebar}>
      <AuthButton
        text={width < 1180 ? null : "Connexion"}
        backgroundcolor="rgba(248, 247, 249, 0.50)"
        color="#f8f7f9"
        href={PAGE_URL.LOGIN}
        icon={width < 1180 ? <BiUser size={20} /> : null}
      />
      <AuthButton
        text={width < 1180 ? null : "Inscription"}
        backgroundcolor="#DC143C"
        color="#f8f7f9"
        href={PAGE_URL.REGISTER}
        icon={width < 1180 ? <BiUserPlus size={20} /> : null}
      />

      {/* <>
           {session?.user?.role === "admin" && (
            <AuthButton
              backgroundcolor="#DC143C"
              color="#f8f7f9"
              href="/admin"
              icon={<MdOutlineAdminPanelSettings />}
            />
          )}

          <AuthButton
            backgroundcolor="#DC143C"
            color="#f8f7f9"
            href="/profile"
            icon={<FaRegUser />}
          />
          <AuthButton
            text="Deconnexion"
            backgroundcolor="#DC143C"
            color="#f8f7f9"
            href="/"
            onClick={() => signOut()}
          />
        </> */}
    </S.Container>
  );
}
