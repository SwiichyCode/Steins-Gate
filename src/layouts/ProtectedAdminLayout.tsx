import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { PAGE_URL } from "@/constants/page_url";
import { ROLE } from "@/constants/role";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedAdminLayout({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem(ROLE.USER);
    const role = user ? JSON.parse(user).roles : null;

    if (!user || role[0] !== ROLE.ADMIN) {
      router.push(PAGE_URL.HOME);
    }
  }, [router]);

  return <>{children}</>;
}
