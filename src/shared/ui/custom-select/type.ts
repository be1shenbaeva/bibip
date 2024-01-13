import { Dispatch, SetStateAction } from "react";

export interface CustomSelectProps {
  options: string[];
  placeholder: string;
  containerStyles?: string;
  onChange?: Dispatch<SetStateAction<string>>;
}
