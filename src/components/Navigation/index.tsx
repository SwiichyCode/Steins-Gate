import Link from "next/link";
import * as S from "./styles";

const links = [
  { href: "#", label: "ACCUEIL" },
  { href: "#", label: "RECRUTEMENT" },
  { href: "#", label: "CONTACT" },
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
