import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import RecrutementService from "@/services/recruitment.service";
import * as S from "./styles";

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
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.FormWrapper>
        <S.FormSectionWrapper>
          <h1>Présentation personnelle</h1>
          <Input
            labelText="Pseudo"
            name="pseudo"
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
        </S.FormSectionWrapper>
        <S.FormLine />
        <S.FormSectionWrapper>
          <h1>Présentation des personnages</h1>
          <S.InputWrapper>
            <Input
              labelText="classe"
              name="classe"
              type="text"
              theme="light"
              register={register}
            />
            <Input
              labelText="ilvl"
              name="ilvl"
              type="text"
              theme="light"
              register={register}
            />
          </S.InputWrapper>
        </S.FormSectionWrapper>
      </S.FormWrapper>
      <Button type="submit" text="SUBMIT" size="medium" />
    </S.Form>
  );
}
