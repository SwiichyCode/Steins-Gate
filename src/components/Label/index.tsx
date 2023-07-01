import { StyledLabel } from "./styles";
import { LabelProps } from "./types";

export const Label = ({ labelText, labelFor }: LabelProps) => {
  return <StyledLabel htmlFor={labelFor}>{labelText}</StyledLabel>;
};
