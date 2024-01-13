import { FC } from "react";
import { DirectionCountProps } from "./type";

const DirectionCount: FC<DirectionCountProps> = ({ icon, count }) => {
  return (
    <div className="flex items-center bg-[#FFA723] text-white rounded-[6px] p-1 px-1 w-[45px] mr-2">
      <img src={icon} alt="car" className="mr-1 w-[12px] h-[12px]" />
      <span className="text-[12px]">{count}</span>
    </div>
  );
};

export default DirectionCount;
