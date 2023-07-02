import styled from "styled-components";

const Container = styled.div`
  width: 512px;
  height: 512px;
  position: absolute;
  bottom: 96px;
  right: 64px;
  z-index: 100;

  @media (max-width: 1430px) {
    display: none;
  }

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
    margin-bottom: 32px;

    .line {
      width: 148px;
      height: 1px;
      background: rgba(248, 247, 249, 0.5);
    }

    span {
      color: rgba(248, 247, 249, 0.5);
      text-transform: uppercase;
      font-size: 18px;
    }
  }

  .content {
    width: 100%;
    height: 512px;
    background-image: url("/tal.jpg");
    background-size: cover;
    background-position: center;
    border-radius: 8px;
  }
`;

export default function OtherGames() {
  return (
    <Container>
      <div className="header">
        <div className="line"></div>
        <span>Prochainement</span>
      </div>

      <div className="content"></div>
    </Container>
  );
}
