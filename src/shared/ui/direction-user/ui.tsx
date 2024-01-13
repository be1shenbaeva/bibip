import { FC } from "react";
import { DirectionUser } from "./type";

const DirectionUser: FC<DirectionUser> = ({ icon, name }) => {
  return (
    <div className="flex items-center  mr-2">
      <img src={icon} alt="" className="w-[30px] mr-2" />
      <p className="text-[14px]">{name}</p>
    </div>
  );
};

export default DirectionUser;
