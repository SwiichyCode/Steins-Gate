import React from "react";
import { useForm, SubmitHandler, useFieldArray, set } from "react-hook-form";
import { useMultiStepFormStore } from "@/stores/multiStepForm";
import FormStepNavigator from "../../FormStepNavigator";
import { InputPersonnageGenerator } from "@/components/InputPersonnageGenerator";
import { Form } from "../../styles";

export interface AuthInputs {
  personnages: {
    classe: string;
    ilvl: number;
  }[];
}

export default function PersonnagesForm() {
  const { data, setPersonnages, nextStep } = useMultiStepFormStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    defaultValues: { personnages: data.personnages },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "personnages",
  });

  const onSubmit: SubmitHandler<AuthInputs> = async (data) => {
    const formattedData = data.personnages.map((personnage) => ({
      classe: personnage.classe,
      ilvl: personnage.ilvl,
    }));

    setPersonnages(formattedData);

    nextStep();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Personnages</h1>
      <InputPersonnageGenerator
        control={control}
        append={append}
        fields={fields}
        remove={remove}
      />

      <FormStepNavigator isForm={true} />
    </Form>
  );
}
