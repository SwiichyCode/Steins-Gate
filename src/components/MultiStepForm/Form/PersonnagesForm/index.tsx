import React from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
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
  const { data, setClasse } = useMultiStepFormStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    defaultValues: {
      personnages: [{ classe: "", ilvl: 0 }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "personnages",
  });

  const onSubmit: SubmitHandler<AuthInputs> = async (data) => {
    // console.log(fields);

    console.log(data.personnages);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputPersonnageGenerator
        control={control}
        append={append}
        fields={fields}
        remove={remove}
      />

      <button type="submit">Submit</button>
      <FormStepNavigator />
    </Form>
  );
}
