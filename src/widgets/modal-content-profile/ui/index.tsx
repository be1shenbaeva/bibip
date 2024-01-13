"use client";

import { DirectionInfo } from "@/entities";
import { CustomButton, DirectionCount } from "@/shared";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { formatDayOfMonth, formatHours } from "@/helpers/formatDate";
import { formatDuration } from "@/helpers/formatDuration";
import {
  useLazyCancelPaymentQuery,
  useLazyCreateReturnOrderQuery,
} from "@/services/BibipTripService";
import { getStoredSeatsDataForTrips } from "@/var/localStorage";
import { Order } from "@/global";
interface ModalContentProfileProps {
  setShowModal: (showModal: boolean) => void;
  order: Order;
  selectedSeats: number[];
}
const ModalContentProfile: FC<ModalContentProfileProps> = ({
  setShowModal,
  order,
  selectedSeats,
}) => {
  const [cancelPayment, { data: cancelPaymentRes }] =
    useLazyCancelPaymentQuery();
  const [createReturnOrder] = useLazyCreateReturnOrderQuery();
  const storeForDataTrips = getStoredSeatsDataForTrips();
  const [isVisible, setIsVisible] = useState(false);

  const handleCancelClick = async () => {
    for (const seats of selectedSeats) {
      if (!order) {
        await cancelPayment({
          orderId: storeForDataTrips!.orderId,
          amount: storeForDataTrips!.price,
          fareName: "Пассажирский",
          seatNum: seats,
        });
      } else {
        await cancelPayment({
          orderId: order.Number,
          amount: order.Amount,
          fareName: "Пассажирский",
          seatNum: seats,
        });
      }
    }

    for (const seats of selectedSeats) {
      if (!order) {
        await createReturnOrder({
          ticketNumber: cancelPaymentRes.ticketNumber,
          departure: storeForDataTrips!.departureId,
          seatNum: String(seats),
        });
      } else {
        await createReturnOrder({
          ticketNumber: cancelPaymentRes.ticketNumber,
          departure: order.Trip.Departure.Id,
          seatNum: String(seats),
        });
      }
    }
  };

  useEffect(() => {
    const tenMinutesInMilliseconds = 10 * 60 * 1000;

    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, tenMinutesInMilliseconds);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex items-center min-h-screen py-8">
      <div className="relative w-full max-w-[550px] mx-auto bg-white shadow-lg rounded-[20px] px-[20px]">
        <div className="sm:flex items-center">
          <div className="mt-10 text-center sm:px-[50px] sm:text-left ">
            <div
              className="absolute right-5 top-6 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <Image
                src="/close-modal.svg"
                alt=""
                className="w-[18px] h-[18px]"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
        <h4 className="text-[20px] font-semibold text-[#171716] mb-[30px]">
          {order.Departure.Locality} - {order.Destination.Locality}
        </h4>
        <div className="border-b border-[#DADADA] pb-[18px]">
          <div className="flex items-baseline">
            <DirectionInfo
              departure={order.Departure.Locality}
              departureStation={order.Departure.Name}
              arrival={order.Destination.Locality}
              arrivalStation={order.Destination.Name}
              timeOfDeparture={formatHours(order.Trip.DepartureTime)}
              timeOfArrival={formatHours(order.Trip.ArrivalTime)}
              containerStyles="profile-line"
              timeInWay={formatDuration(Number(order.Trip.Duration))}
            />
            <p className="text-[10px] text-[#FF5959]">
              {formatDayOfMonth(order.Trip.ArrivalTime)}
            </p>
          </div>
        </div>
        <div className="mt-[25px]">
          <div className="flex justify-between">
            <div className="flex">
              <DirectionCount icon="/bus-white.svg" count={"8,7"} />
              <p className="text-[#3573F0] underline">
                {order.Trip.CarrierData.CarrierName}
              </p>
            </div>
            <div className="flex">
              <Image
                src="/wifi-off.svg"
                width="20"
                height="20"
                className="mx-[16px]"
                alt="wifi-off"
              />
              <Image src="/plug-2.svg" width="20" height="20" alt="plug" />
            </div>
          </div>
          <div className="bg-[#E4E9F0] p-1 flex justify-center rounded-[6px] w-[110px] mt-[12px]">
            <p className="text-[#676767] text-[12px]">
              Место:{" "}
              <span className="text-[#95A4BC]">
                {selectedSeats.join(",")} место
              </span>
            </p>
          </div>
          <div className="flex items-start mt-[30px]">
            <div className="mr-10 mt-[10px]">
              <div className="v8aa v8aa-no">
                <span className="aav9 aa9v aav9-no"></span>
                <span className="a9va aa9v a9va-no aa9v-no"></span>
              </div>
              <div className="v8aa v8aa-no">
                <span className="aav9 aa9v aav9-no"></span>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[12px]">
                {order.Destination.Locality}
              </p>
              <div className="text-[#676767] text-[10px] font-light flex items-center mb-[35px]">
                <span>
                  {formatDayOfMonth(order.Trip.ArrivalTime)},{" "}
                  {formatHours(order.Trip.ArrivalTime)}{" "}
                </span>
                <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
                  &bull;
                </span>
                <p>{order.Destination.Name}</p>
              </div>
              <p className="font-semibold text-[12px]">
                {order.Departure.Locality}
              </p>
              <div className="text-[#676767] text-[10px] font-light flex items-center mb-[35px]">
                <span>
                  {formatDayOfMonth(order.Trip.DepartureTime)},{" "}
                  {formatHours(order.Trip.DepartureTime)}{" "}
                </span>
                <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
                  &bull;
                </span>
                <p>{order.Departure.Name}</p>
              </div>
            </div>
          </div>
          <div className="rounded-[10px] w-full bg-[#AEC7F954]  flex justify-center py-[12px] my-[25px]">
            <Image src="/receipt.svg" width={20} height={20} alt="receipt" />
            <p className="ml-[8px] text-[#3573F0] text-[12px]">
              Билет можно не печатать
            </p>
          </div>
          {isVisible && (
            <CustomButton
              title="Отменить бронь"
              containerStyles="bg-[#FF3A44] text-white w-full my-[30px]"
              onClick={handleCancelClick}
            />
          )}
        </div>
        {/* <div className="rounded-[10px] bg-[#AEC7F954] w-[335px] flex justify-center py-[12px] mt-[15px] mb-[30px] mx-auto">
          <p className="text-[#3573F0] text-[12px] font-light">
            Изменить номер телефона
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ModalContentProfile;
