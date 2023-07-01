import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

import AuthForm from "@/components/AuthForm";
import AuthLayout from "@/layouts/AuthLayout";
import AuthCard from "@/components/AuthCard";
import AuthLoginForm from "@/components/AuthLoginForm";

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // check if logged in and redirect to home page if so
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthLayout>
      <AuthCard title="connexion">
        <AuthLoginForm />
      </AuthCard>
    </AuthLayout>
  );
}

export default AuthPage;
