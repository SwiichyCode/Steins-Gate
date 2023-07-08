import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const StyledTextField_ = styled(TextField)`
  .MuiInputBase-root {
    background-color: transparent;
  }
  .MuiOutlinedInput-root {
    border: 1px solid #e0e0e0;
    &:hover {
      border: 1px solid #e0e0e0;
    }
    &.Mui-focused {
      border: 1px solid #e0e0e0;
    }
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  .MuiInputLabel-root {
    color: #e0e0e0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    margin-bottom: 8px;
    top: -10px;
    left: 0;
    font-family: "Anton", sans-serif;
    letter-spacing: 0.1em;

    &.Mui-focused {
      color: #e0e0e0;
    }
  }
  .MuiInputBase-input {
    color: #e0e0e0;
    &::placeholder {
      opacity: 0.42;
    }
  }
  /* .MuiFormHelperText-root {
  }
  .MuiInputAdornment-root {
  }
  .MuiInputAdornment-positionStart {
  }
  .MuiInputAdornment-positionEnd {
  }
  .MuiInput-underline:before {
  }
  .MuiInput-underline:after {
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
  } */
`;
