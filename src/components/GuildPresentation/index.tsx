import * as S from "./styles";

export default function GuildPresentation() {
  return (
    <S.Container>
      <h2>Bienvenue dans la guilde Steins Gate !</h2>
      <ul>
        <li>- Nom de guilde : Steins Gate</li>
        <li>- Type : Semi-Tryhard / Chill</li>
        <li>- Serveur : Trixion</li>
        {/* // Replace with dynamic value */}
        <li>- Effectif : 15 actifs</li>
      </ul>

      <ul>
        <li>
          <h3>Description :</h3>
        </li>
        <li>
          <p>
            Steins Gate est une guilde originaire de EUO qui a récemment décidé
            de s&apos;installer sur le serveur Trixion. Nous recherchons des
            joueurs qui souhaitent se joindre à nous et reprendre
            l&apos;aventure. Nous sommes une guilde conviviale et accueillante,
            et nous aimons partager et échanger avec les autres joueurs. Nous
            encourageons également la présence vocale pour favoriser la
            communication et la coordination.
          </p>
        </li>
      </ul>

      <ul>
        <li>
          <h3>Critères de recrutement :</h3>
        </li>
        <li>
          <p>
            Nous recherchons des joueurs actifs, avec un minimum de 1460 ilvl.
            Être sympathique, drôle est aimer l&apos;interaction avec les autres
            important pour nous. La présence vocale lors des activités est
            appréciée.
          </p>
        </li>
      </ul>

      <ul>
        <li>
          <h3>Contact :</h3>
        </li>
        <li>
          <p>
            Si vous souhaitez obtenir plus d&apos;informations sur la guilde
            Steins Gate, n&apos;hésitez pas à contacter @Swiichy ou @Shu. Vous
            pouvez également nous rejoindre sur notre serveur Discord : [lien
            vers le serveur Discord]
            <a href="https://discord.gg/SUVnuBWm" target="_blank">
              (https://discord.gg/SUVnuBWm)
            </a>
            .
          </p>
        </li>
      </ul>
    </S.Container>
  );
}
