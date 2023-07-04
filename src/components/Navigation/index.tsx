import Link from "next/link";
import * as S from "./styles";
import { PAGE_URL } from "@/constants/page_url";

const links = [
  { href: PAGE_URL.LANDING, label: "ACCUEIL" },
  { href: PAGE_URL.RECRUTEMENT, label: "RECRUTEMENT" },
];

export default function Navigation() {
  return (
    <S.Container>
      <ul>
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
