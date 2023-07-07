import { useForm, SubmitHandler } from "react-hook-form";
import { useMultiStepFormStore } from "@/stores/multiStepForm";
import Input from "@/components/Input";
import FormStepNavigator from "../../FormStepNavigator";
import { Form } from "../../styles";

interface AuthInputs {
  pseudo: string;
  description: string;
  discord: string;
}

export default function InformationsForm() {
  const { data, setPresentation } = useMultiStepFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthInputs>();

  const onSubmit: SubmitHandler<AuthInputs> = async (data) => {
    setPresentation(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        labelText="Pseudo"
        register={register}
        name="pseudo"
        type="text"
        defaultValue={data.presentation.pseudo}
        theme="dark"
      />
      <Input
        labelText="Vos disponibilités"
        placeholder="3 soirs par semaine (Mercredi, Jeudi, Dimanche)"
        register={register}
        name="disponibilites"
        type="text"
        theme="dark"
      />
      <Input
        labelText="Discord"
        register={register}
        name="discord"
        type="text"
        defaultValue={data.presentation.discord}
        theme="dark"
      />
      <FormStepNavigator onSubmit={onSubmit} />
    </Form>
  );
}
