import { FC } from "react";

interface DirectionInfoProps {
  departure: string;
  departureStation?: string;
  arrival: string;
  arrivalStation?: string;
  timeOfDeparture: string;
  timeOfArrival: string;
  containerStyles?: string;
  timeInWay?: string;
}

const DirectionInfo: FC<DirectionInfoProps> = ({
  departure,
  departureStation,
  arrival,
  arrivalStation,
  timeOfDeparture,
  timeOfArrival,
  containerStyles,
  timeInWay,
}) => {
  return (
    <div className="flex justify-between items-baseline w-[410px]">
      <div className="w-[92px]">
        <span className="font-semibold text-[18px]">{timeOfDeparture}</span>
        <p className="text-[#676767] font-normal text-[12px]">{departure}</p>
        <p className="text-[#676767] text-[12px] mt-[8px]">
          {departureStation}
        </p>
      </div>
      <div className="w-[92px]">
        <span className="text-[#95A4BC] text-[12px]">~ {timeInWay}</span>
      </div>
      <div className="relative">
        <div
          className={`${containerStyles} absolute left-[-108px] top-[-40px]`}
        >
          <div className="v8aa">
            <span className="aav9 aa9v"></span>
            <span className="a9va aa9v"></span>
            <span className="aav9 aa9v1"></span>
          </div>
        </div>
      </div>

      <div className="w-[92px]">
        <span className="font-semibold text-[18px]">{timeOfArrival}</span>
        <p className="text-[#676767] font-normal text-[12px]">{arrival}</p>
        <p className="text-[#676767] text-[12px] mt-[8px]">{arrivalStation}</p>
      </div>
    </div>
  );
};
export default DirectionInfo;
