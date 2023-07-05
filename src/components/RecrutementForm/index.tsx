import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import AuthButton from "../AuthButton";
import Button from "../Button";
import RecrutementService from "@/services/recruitment.service";

const Container = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

interface AuthInputs {
  pseudo: string;
  classe: string;
  presentation: string;
}

export default function RecrutementForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthInputs>();

  const onSubmit: SubmitHandler<AuthInputs> = async (data) => {
    try {
      await RecrutementService.postRecrutement(
        data.pseudo,
        data.classe,
        data.presentation
      );
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h1>Formulaire de recrutement</h1>
      <Input
        labelText="Pseudo"
        name="pseudo"
        type="text"
        theme="light"
        register={register}
      />
      <Input
        labelText="Main classe"
        name="classe"
        type="text"
        theme="light"
        register={register}
      />
      <TextArea
        labelText="Présentation"
        name="presentation"
        register={register}
        theme="light"
      />

      <Button type="submit" text="SUBMIT" size="medium" />
    </Container>
  );
}
