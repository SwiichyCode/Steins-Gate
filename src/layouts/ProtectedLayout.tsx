import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { PAGE_URL } from "@/constants/page_url";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedLayout({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push(PAGE_URL.LOGIN);
    }
  }, [router]);

  return <>{children}</>;
}
