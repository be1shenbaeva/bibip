import { FC } from "react";
import { DirectionCard } from "./type";

const DirectionCard: FC<DirectionCard> = ({ imageSrc, destination, price }) => {
  return (
    <div className="xl:mx-0 mx-10 sm:w-44 w-56 lg:w-[260px] xl:mr-[20px] mb-4 xl:last:mr-0">
      <div>
        <img src={imageSrc} alt="city" className="w-full" />
      </div>
      <div className="mt-[18px]">
        <p className="text-[17px] font-medium">{destination}</p>
        <p className="text-[17px] text-[#676767]">{price}</p>
      </div>
    </div>
  );
};

export default DirectionCard;
