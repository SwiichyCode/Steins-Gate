import { useRouter } from "next/router";
import { PAGE_URL } from "@/constants/page_url";
import AuthService from "@/services/auth.service";

export const useLogout = () => {
  const router = useRouter();
  const handleLogout = () => {
    AuthService.logout();
    router.push(PAGE_URL.LOGIN);
  };
  return { handleLogout };
};
