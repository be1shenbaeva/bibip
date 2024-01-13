import Image from "next/image";
import { FC } from "react";

interface CustomText {
  containerStyles?: string;
  textStyles?: string;
}

const CustomText: FC<CustomText> = ({ containerStyles, textStyles }) => {
  return (
    <div className={`${containerStyles} flex items-center mb-[25px]`}>
      <Image
        src="/direct-up.png"
        width="30"
        height="30"
        alt="direct-up"
        className="mr-[15px]"
      />
      <h4 className={`${textStyles}`}>Популярные направления</h4>
    </div>
  );
};

export default CustomText;
