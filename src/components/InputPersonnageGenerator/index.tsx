import React from "react";
import {
  Control,
  Controller,
  FieldArrayWithId,
  UseFieldArrayAppend,
} from "react-hook-form";
import StyledTextField from "../TextField";
import Button from "../Button";
import { AuthInputs } from "@/components/MultiStepForm/Form/PersonnagesForm";
import * as S from "./styles";

interface InputPersonnageGeneratorProps {
  control: Control<AuthInputs, any>;
  fields: FieldArrayWithId<AuthInputs, "personnages">[];
  append: UseFieldArrayAppend<AuthInputs, "personnages">;
  remove: (index?: number | number[]) => void;
}

export const InputPersonnageGenerator = ({
  control,
  append,
  fields,
  remove,
}: InputPersonnageGeneratorProps) => {
  const addFields = () => {
    append({ classe: "", ilvl: 0 });
  };

  return (
    <S.InputGeneratorContainer>
      {fields.map((field: any, index: number) => (
        <S.InputContainer key={field.id}>
          <S.InputWrapper>
            <Controller
              render={({ field }) => (
                <StyledTextField label="CLASSE" {...field} />
              )}
              name={`personnages.${index}.classe`}
              control={control}
              defaultValue={field.classe}
            />
            <Controller
              render={({ field }) => (
                <StyledTextField label="ILVL" type="number" {...field} />
              )}
              name={`personnages.${index}.ilvl`}
              control={control}
              defaultValue={field.ilvl}
            />
          </S.InputWrapper>
          <svg
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => remove(index)}
          >
            <g className="icon-close" fill="#828FA3" fillRule="evenodd">
              <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
              <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
            </g>
          </svg>
        </S.InputContainer>
      ))}
      <Button
        onClick={addFields}
        text="+ Add New Column"
        type="button"
        size="medium"
      />
    </S.InputGeneratorContainer>
  );
};
