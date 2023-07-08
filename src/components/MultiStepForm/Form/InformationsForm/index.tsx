import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useMultiStepFormStore } from "@/stores/multiStepForm";
import StyledTextField from "@/components/TextField";
import FormStepNavigator from "../../FormStepNavigator";
import { Form } from "../../styles";
import { useEffect } from "react";

interface AuthInputs {
  pseudo: string;
  disponibilites: string;
  discord: string;
}

export default function InformationsForm() {
  const { data, setPresentation, nextStep } = useMultiStepFormStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthInputs>({ defaultValues: data.presentation });

  const onSubmit: SubmitHandler<AuthInputs> = async (data) => {
    setPresentation(data);

    nextStep();
  };

  useEffect(() => {
    reset(data.presentation);
  }, [data.presentation, reset]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Informations</h1>
      <Controller
        name="pseudo"
        control={control}
        render={({ field }) => (
          <StyledTextField
            label="Pseudo"
            defaultValue={data.presentation.pseudo}
            required
            {...field}
          />
        )}
      />
      <Controller
        name="disponibilites"
        control={control}
        render={({ field }) => (
          <StyledTextField
            label="Disponibilités"
            defaultValue={data.presentation.disponibilites}
            required
            {...field}
          />
        )}
      />
      <Controller
        name="discord"
        control={control}
        render={({ field }) => (
          <StyledTextField
            label="Discord"
            defaultValue={data.presentation.discord}
            required
            {...field}
          />
        )}
      />

      <FormStepNavigator isForm={true} />
    </Form>
  );
}
