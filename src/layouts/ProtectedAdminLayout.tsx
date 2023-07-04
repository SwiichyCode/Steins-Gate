import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { PAGE_URL } from "@/constants/page_url";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedAdminLayout({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const role = user ? JSON.parse(user).roles : null;

    if (!user || role[0] !== "admin") {
      router.push(PAGE_URL.HOME);
    }
  }, [router]);

  return <>{children}</>;
}
