import styled from "styled-components";
import { LabelProps } from "./types";

export const StyledLabel = styled.label<Partial<LabelProps>>`
  font-weight: var(--font-bold);
  font-size: 18px;
  line-height: 1.5rem;
  color: #f8f7f9;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: "Anton", sans-serif;
`;
