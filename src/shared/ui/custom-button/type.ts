export interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  textStyles?: string;
  containerStyles?: string;
  btnType?: "button" | "submit" | "reset" | undefined;
  icon?: string;
  iconLeft?: string;
  iconStyles?: string;
}
