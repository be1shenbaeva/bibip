import { FC } from "react";
import { DirectionCardChildren } from "./type";

const DirectionCardChildren: FC<DirectionCardChildren> = ({
  imageSrc,
  destination,
  price,
}) => {
  return (
    <div className="flex items-center mb-[30px] m-auto lg:mb-0">
      <div className="mr-4">
        <img src={imageSrc} alt="city" className="w-[70px] rounded-[12px]" />
      </div>
      <div className="w-48 xsm:w-[100px] md:w-52 lg:w-[90px] 2xl:w-[223px] mr-[20px]">
        <p className="text-[16px] font-medium">{destination}</p>
        <p className="text-[16px] text-[#676767] font-normal">{price}</p>
      </div>
    </div>
  );
};

export default DirectionCardChildren;
