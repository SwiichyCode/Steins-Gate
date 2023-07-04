import { useState } from "react";
import { Label } from "../Label";
import { InputProps } from "./types";
import * as S from "./styles";

export default function Input({
  name,
  labelText,
  placeholder,
  defaultValue,
  onChange,
  error,
  value,
  register,
  maxW,
  type,
  required,
}: InputProps) {
  const [isPlaceholderActive, setPlaceholderActive] = useState(true);

  return (
    <S.Container maxW={maxW}>
      <S.LabelWrapper>
        {labelText && <Label labelFor={name} labelText={labelText} />}
        {error && <S.Error>{error}</S.Error>}
      </S.LabelWrapper>
      <S.Wrapper>
        <S.StyledInput
          name={name}
          value={value}
          placeholder={isPlaceholderActive ? placeholder : ""}
          onClick={() => setPlaceholderActive(false)}
          defaultValue={defaultValue}
          onChange={onChange}
          type={type}
          {...register?.(name as string, { required: required })}
        />
      </S.Wrapper>
    </S.Container>
  );
}
