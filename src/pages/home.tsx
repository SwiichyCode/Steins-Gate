import ProtectedLayout from "@/layouts/ProtectedLayout";
import HomeLayout from "@/layouts/HomeLayout";
import Header from "@/components/Header";

export default function Home() {
  return (
    <ProtectedLayout>
      <HomeLayout>
        <Header />
      </HomeLayout>
    </ProtectedLayout>
  );
}
