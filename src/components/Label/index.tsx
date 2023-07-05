import { StyledLabel } from "./styles";
import { LabelProps } from "./types";

export const Label = ({ labelText, labelFor, theme }: LabelProps) => {
  return (
    <StyledLabel htmlFor={labelFor} theme={theme}>
      {labelText}
    </StyledLabel>
  );
};
