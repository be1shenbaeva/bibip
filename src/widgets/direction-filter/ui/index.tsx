import Image from "next/image";
import { FC, useState } from "react";

interface DirectionFilterProps {
  route: string;
  passengers: string;
  handleSortByCost: () => void;
  handleSortByDepartureTime: () => void;
  handleSortByArrivalTime: () => void;
  handleSortByTravelTime: () => void;
}

const DirectionFilter: FC<DirectionFilterProps> = ({
  route,
  passengers,
  handleSortByCost,
  handleSortByDepartureTime,
  handleSortByArrivalTime,
  handleSortByTravelTime,
}) => {
  const [activeButton, setActiveButton] = useState(""); // Локальное состояние для отслеживания активной кнопки сортировки
  const [sortDirection, setSortDirection] = useState(""); // Локальное состояние для отслеживания направления сортировки

  const handleButtonClick = (buttonName: string, handler: () => void) => {
    if (activeButton === buttonName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortDirection("asc");
    }
    setActiveButton(buttonName);
    handler();
  };

  const renderArrow = (buttonName: string) => {
    if (activeButton === buttonName) {
      // Показываем стрелку только для активной кнопки
      return sortDirection ? (
        <Image src={`/arrow-down.svg`} width="20" height="20" alt="" />
      ) : null;
    }
    return null;
  };

  return (
    <div className="mb-[43px]">
      <p className="text-[#171716] font-semibold mb-5 text-[16px]">
        {route} Направлений
      </p>
      <div className="flex justify-between items-center">
        <p className="text-[#676767] text-[12px]">
          Время местное. Цены за {passengers} пассажира
        </p>

        <div className="flex items-center">
          <div
            className={`flex mr-[30px] cursor-pointer ${
              activeButton === "cost" ? "text-[#3573F0]" : ""
            }`}
            onClick={() => handleButtonClick("cost", handleSortByCost)}
          >
            {renderArrow("cost")}
            <p className="ml-1 text-[12px]">Стоимость</p>
          </div>
          <div
            className={`flex mr-[30px] cursor-pointer ${
              activeButton === "departure" ? "text-[#3573F0]" : ""
            }`}
            onClick={() =>
              handleButtonClick("departure", handleSortByDepartureTime)
            }
          >
            {renderArrow("departure")}
            <p className="ml-1 text-[12px]">Время отправления</p>
          </div>
          <div
            className={`flex mr-[30px] cursor-pointer ${
              activeButton === "arrival" ? "text-[#3573F0]" : ""
            }`}
            onClick={() =>
              handleButtonClick("arrival", handleSortByArrivalTime)
            }
          >
            {renderArrow("arrival")}
            <p className="ml-1 text-[12px]">Время прибытия</p>
          </div>
          <div
            className={`flex cursor-pointer ${
              activeButton === "travelTime" ? "text-[#3573F0]" : ""
            }`}
            onClick={() =>
              handleButtonClick("travelTime", handleSortByTravelTime)
            }
          >
            {renderArrow("travelTime")}
            <p className="ml-1 text-[12px]">Время в пути</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionFilter;
