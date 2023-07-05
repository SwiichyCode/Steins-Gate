import AuthButton from "../AuthButton";
import { useWindowSize } from "usehooks-ts";
import { useSidebarStore } from "@/stores/sidebarStore";
import { useLogout } from "@/hooks/useLogout";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BiUser, BiUserPlus } from "react-icons/bi";
import { PAGE_URL } from "@/constants/page_url";
import { ROLE } from "@/constants/role";
import { User } from "@/types/user";
import * as S from "./styles";

type Props = {
  currentUser: User | null;
};

export default function AuthNavigation({ currentUser }: Props) {
  const sidebar = useSidebarStore((state) => state.sidebar);
  const { handleLogout } = useLogout();
  const { width } = useWindowSize();

  return (
    <S.Container sidebar={sidebar}>
      {!currentUser && (
        <>
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
        </>
      )}

      {currentUser && (
        <>
          {currentUser?.roles[0] === ROLE.ADMIN && (
            <AuthButton
              backgroundcolor="#DC143C"
              color="#f8f7f9"
              href={PAGE_URL.ADMIN}
              icon={<MdOutlineAdminPanelSettings />}
            />
          )}
          <AuthButton
            backgroundcolor="#DC143C"
            color="#f8f7f9"
            href={PAGE_URL.PROFILE}
            icon={<FaRegUser />}
          />
          <AuthButton
            text="Deconnexion"
            backgroundcolor="#DC143C"
            color="#f8f7f9"
            href="/"
            onClick={() => handleLogout()}
          />
        </>
      )}
    </S.Container>
  );
}
