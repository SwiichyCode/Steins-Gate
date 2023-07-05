import styled from "styled-components";
import RecrutementLayout from "@/layouts/RecrutementLayout";
import GuildRules from "@/components/GuildRules";
import RecrutementForm from "@/components/RecrutementForm";

const RecrutementWrapper = styled.section`
  display: flex;
  border-radius: 10px;
`;

export default function Recrutement() {
  return (
    <RecrutementLayout>
      <RecrutementWrapper>
        <GuildRules />
        <RecrutementForm />
      </RecrutementWrapper>
    </RecrutementLayout>
  );
}
