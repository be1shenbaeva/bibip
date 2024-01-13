"use client";
import Image from "next/image";
import { FC } from "react";
import { CustomButtonProps } from "./type";

const CustomButton: FC<CustomButtonProps> = ({
  btnType,
  icon,
  iconLeft,
  onClick,
  textStyles,
  containerStyles,
  title,
  iconStyles,
}) => {
  return (
    <button
      className={`flex items-center rounded-[10px] py-[10px]   ${containerStyles}`}
      type={btnType || "button"}
      onClick={onClick}
    >
      {icon && (
        <div className={`${iconStyles}  relative min-w-6 w-6 h-6`}>
          <Image src={icon} alt="allow_left" fill className="object-contain" />
        </div>
      )}
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {iconLeft && (
        <div className="relative w-[24px] h-[24px]">
          <Image
            src={iconLeft}
            alt="allow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
export default CustomButton;
