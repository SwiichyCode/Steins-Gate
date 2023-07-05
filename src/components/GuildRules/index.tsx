import styled from "styled-components";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 500px;
  max-width: 600px;
  height: 600px;
  background-color: #161013;
  color: #fff;
  font-size: 1.2rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 20px;
  gap: 16px;
  overflow-y: scroll;

  p,
  li {
    line-height: 1.2;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default function GuildRules() {
  return (
    <Container>
      <p>Bonjour et bienvenue à toi,</p>
      <p>
        Voici quelques lignes à lire avant de te décider à postuler ou pas dans
        notre guilde et communauté Steins Gate. Notre esprit de guilde
        n&apos;est pas une prise de tête. Nous acceptons que le fait que chaque
        personne a un gameplay différent et qui lui propre. Il/Elle est libre de
        jouer à son rythme sans obligation sauf pour les membres du raid
        inscrits.
      </p>
      <p>
        Afin que tous le monde passe un bon moment, nous te demandons de lire
        ces règles qui sont tout du bon sens et du respect.
      </p>
      <ol>
        <li>
          - Le respect des autres joueurs que ce soit sur le plan du
          gameplay(tout le monde n&apos;a pas les même capacités), de
          l&apos;identité, séxualité, ect...
        </li>
        <li>
          - Du sérieux en vocal lors des raids. Bien que la guilde ne soit pas
          du tryhard, c&apos;est plus cool de garder un peu de sérieux durant
          ces soirées.
        </li>
        <li>
          - Privilégie si possible les membres de ta guilde au PU si tu as des
          gardiens/cartes/cubes à faire
        </li>
        <li>
          - Si tu est absent pour le raid ou pour une durée plus longue,
          préviens nous dés que possible que l&apos;on puisse s&apos;organiser.
          Par ailleurs, si un soir tu as la flemme de raid, pas de soucis !
          Préviens juste ton abscence.
        </li>
        <li>
          - Afin d&apos;atteindre tes objectifs, l&apos;optimisation du perso
          est importante. On connaît la RNG pour loot du bon stuff sur LA, on
          sera compréhensif mais on évite de venir avec aucune gravure ou
          pire... avec des bijoux &quot;domination&quot;.
        </li>
        <li>
          - Lors des raids, pense a prévoir ton stock de potions, bombes,
          nourritures.
        </li>
        <li>- Pas de PL payant entres membres de guildes.</li>
      </ol>
    </Container>
  );
}
