import Link from "next/link";
import { useRouter } from "next/router";
import { PAGE_URL } from "@/constants/page_url";
import { User } from "@/types/user";
import * as S from "./styles";

const landingLinks = [
  { href: PAGE_URL.LANDING, label: "ACCUEIL" },
  {
    href: PAGE_URL.RECRUTEMENT,
    label: "RECRUTEMENT",
  },
];

const homeLinks = [
  { href: PAGE_URL.HOME, label: "ACCUEIL" },
  { href: PAGE_URL.PROFILE, label: "PROFIL" },
  { href: PAGE_URL.EVENEMENTS, label: "EVENEMENTS" },
  { href: PAGE_URL.ADMIN, label: "ADMIN" },
];

type Props = {
  currentUser: User | null;
};

export default function Navigation({ currentUser }: Props) {
  const router = useRouter();

  return (
    <S.Container currentUser={currentUser}>
      <ul>
        {currentUser
          ? homeLinks.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>{label}</Link>
              </li>
            ))
          : landingLinks.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link
                  href={href}
                  className={router.pathname === href ? "active" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
      </ul>
    </S.Container>
  );
}
