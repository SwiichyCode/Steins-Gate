import { useRouter } from "next/router";
import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: Props) {
  const router = useRouter();

  return <S.Container router={router.pathname}>{children}</S.Container>;
}
