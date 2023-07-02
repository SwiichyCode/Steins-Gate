import Logo from "@/components/Logo";
import AuthCard from "@/components/AuthCard";
import AuthForm from "@/components/AuthForm";
import * as S from "./styles";

type Props = {
  title: string;
  isRegister: boolean;
};

export default function AuthLayout({ title, isRegister }: Props) {
  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.MainWrapper>
        <AuthCard title={title}>
          <AuthForm isRegister={isRegister} />
        </AuthCard>
      </S.MainWrapper>
    </S.Container>
  );
}
