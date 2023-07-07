export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // name: string;
  labelText?: string;
  placeholder?: string;
  // defaultValue?: string;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  value?: string | number | readonly string[] | undefined;
  register?: any;
  maxW?: number;
  // type?: string;
  // required?: boolean;
  theme?: "light" | "dark";
  // control?: any;
  // onBlur?: any;
  // ref?: any;
}
