import { useState } from "react";
import { Label } from "../Label";
import { InputProps } from "./types";
import * as S from "./styles";

export default function Input({
  name,
  labelText,
  placeholder,
  error,
  register,
  maxW,
  value,
  theme = "light",
  ...props
}: InputProps) {
  const [isPlaceholderActive, setPlaceholderActive] = useState(true);

  return (
    <S.Container maxW={maxW}>
      <S.LabelWrapper>
        {labelText && (
          <Label labelFor={name} labelText={labelText} theme={theme} />
        )}
        {error && <S.Error>{error}</S.Error>}
      </S.LabelWrapper>
      <S.Wrapper>
        <S.StyledInput
          placeholder={isPlaceholderActive ? placeholder : ""}
          onClick={() => setPlaceholderActive(false)}
          theme={theme}
          value={value}
          {...register?.(name as string)}
          {...props}
        />
      </S.Wrapper>
    </S.Container>
  );
}
