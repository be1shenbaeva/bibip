"use client";

import { useState } from "react";
import { DirectionCount } from "@/shared";
import Image from "next/image";
import {
  formatDateWithDots,
  formatDayOfMonth,
  formatHours,
} from "@/helpers/formatDate";
import {
  getStoredDataForTrips,
  getStoredSeatsDataForTrips,
} from "@/var/localStorage";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const MoreTicket = () => {
  const [storedDataForTrips, setStoredDataForTrips] = useState(
    getStoredDataForTrips()
  );
  const [storedSeatsDataForTrips, setStoredSeatsDataForTrips] = useState(
    getStoredSeatsDataForTrips()
  );
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const selectedSeats = useSelector(
    (state: RootState) => state.selectedSeats.selectedSeats
  );

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div className="mt-[40px] bg-[#fff] py-[15px] px-[25px] rounded-[10px] relative">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleDetails}
      >
        <div>
          <p className="text-[14px]">
            {storedDataForTrips!.from.locality} -{" "}
            {storedDataForTrips!.to.locality}
          </p>
          <p className="text-[#95A4BC] text-[12px]">
            {formatDateWithDots(storedDataForTrips!.startDate)},{" "}
            {selectedSeats.length}{" "}
            {selectedSeats.length === 0 ? "пассажиров" : ""}
            {selectedSeats.length === 1 ? "пассажир" : ""}
            {selectedSeats.length > 1 ? "пассажира" : ""},{" "}
            {selectedSeats.length * Number(storedSeatsDataForTrips!.price)} ₽
          </p>
        </div>
        <div>
          <Image
            src="/arrow-right-ticket.svg"
            width="20"
            height="20"
            className={`cursor-pointer ${isDetailsOpen ? "" : "rotate-180"}`}
            alt="arrow-right"
          />
        </div>
      </div>

      {isDetailsOpen && (
        <div className="flex items-baseline justify-between absolute py-[15px] px-[25px] bg-[#fff] w-full left-0 z-10 rounded-b-[10px]">
          <div>
            <span className="text-[12px] block mt-[30px]  mb-[10px]">
              {formatHours(storedSeatsDataForTrips!.departureTime)},{" "}
              {formatDayOfMonth(storedSeatsDataForTrips!.departureTime)}
            </span>
            <p className="text-[#676767] text-[12px] mb-[18px]">
              {storedSeatsDataForTrips!.departureName}
            </p>

            <span className="text-[12px] text-[#676767] block mb-[10px]">
              {formatHours(storedSeatsDataForTrips!.arrivalTime)},{" "}
              {formatDayOfMonth(storedSeatsDataForTrips!.arrivalTime)}
            </span>
            <p className="text-[#676767] text-[12px]">
              {storedSeatsDataForTrips!.destinationName}
            </p>
          </div>
          <div>
            <div className="flex mb-[8px]">
              <DirectionCount icon="/car-white.svg" count="8,7" />
              <Image
                src="/wifi-off.svg"
                width="20"
                height="20"
                className="mx-[16px]"
                alt="wifi-off"
              />
              <Image src="/plug-2.svg" width="20" height="20" alt="plug" />
            </div>
            <p className="text-[12px]">{storedSeatsDataForTrips!.carrier}</p>
            <p className="text-[#676767] text-[12px]">Перевозчик</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreTicket;
