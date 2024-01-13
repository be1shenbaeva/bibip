import { Dispatch, SetStateAction } from "react";

export interface FloatingInputProps {
  placeholder: string;
  mockText?: string | number;
  readOnly?: boolean;
  containerStyles?: string;
  type?: string;
  name?: string;
  onChange: Dispatch<SetStateAction<any>>;
  inputValue: string;
  required: boolean;
}
