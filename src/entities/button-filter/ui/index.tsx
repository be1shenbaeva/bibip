import { car_gray, bus_white, car_white, bus_gray } from "public";
import { FC, useState } from "react";
import { ButtonFilterProps } from "../type";
import { CustomButton } from "@/shared";

const ButtonFilter: FC<ButtonFilterProps> = ({ containerStyles }) => {
  const [activeButton, setActiveButton] = useState("bus");

  const getIcon = (buttonType: string) => {
    return buttonType === "bus"
      ? activeButton === "bus"
        ? bus_white
        : bus_gray
      : activeButton === "car"
      ? car_white
      : car_gray;
  };

  return (
    <div className={`flex my-5 ${containerStyles}`}>
      <CustomButton
        icon={getIcon("bus")}
        title="Автобусные билеты"
        containerStyles={`p-[10px] py-[9px] mr-5  text-[12px] min-w-[120px]  ${
          activeButton === "bus"
            ? "bg-[#BD21D6] text-white"
            : "bg-[#E4E5EF] text-black"
        }`}
        textStyles="ml-2 text-left text-xsm "
        onClick={() => {
          setActiveButton("bus");
        }}
      />
      <CustomButton
        icon={getIcon("car")}
        title="Автомобили"
        containerStyles={`p-[10px] py-[9px] text-[12px] min-w-[120px]  ${
          activeButton === "car"
            ? "bg-[#ffa722] text-black"
            : "bg-[#E4E5EF] text-black"
        }`}
        textStyles="ml-2 text-left text-xsm "
        onClick={() => {
          setActiveButton("car");
        }}
      />
    </div>
  );
};

export default ButtonFilter;
