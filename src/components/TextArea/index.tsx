import React from "react";
import { Label } from "../Label";
import * as S from "./styles";

interface TextAreaProps {
  labelText: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  register?: any;
  required?: boolean;
  name: string;
  theme?: "light" | "dark";
}

export default function TextArea({
  labelText,
  onChange,
  register,
  required,
  name,
  theme = "light",
}: TextAreaProps) {
  return (
    <S.Container>
      <Label labelText={labelText} theme={theme} />
      <S.StyledTextArea
        onChange={onChange}
        {...register?.(name as string, { required: required })}
        theme={theme}
      />
    </S.Container>
  );
}
