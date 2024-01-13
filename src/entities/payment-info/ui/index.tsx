import { CustomButton, DirectionCount, FloatingInput, Modal } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { formatDayOfMonth, formatHours } from "@/helpers/formatDate";
import {
  getStoredOrderId,
  getStoredSeatsDataForTrips,
} from "@/var/localStorage";
import TicketInfo from "@/widgets/ticket-info/ui";
import {
  baseUrl,
  useLazyReserveOrderQuery,
  useSetTicketDataMutation,
} from "@/services/BibipTripService";
import { fetchPassengersNumbers } from "@/helpers/fetchPassengersNumbers";
import { ModalContentProfile } from "@/widgets";
import { makePayment } from "@/services/makePayment";
import { updateOrderIdAndPrice } from "@/helpers/updateLocalStorage";
import { Order, TicketData } from "@/global";

interface IPaymentInfo {
  setShowModal: (showModal: boolean) => void;
  order: Order;
  selectedSeats: number[];
}
const PaymentInfo: FC<IPaymentInfo> = ({
  setShowModal,
  order,
  selectedSeats,
}) => {
  const storedSeatsDataForTrips = getStoredSeatsDataForTrips();

  const [passengers, setPassengers] = useState<TicketData[]>([]);
  const [triggerFunc] = useSetTicketDataMutation();
  const [reserveOrderTrigger] = useLazyReserveOrderQuery();
  const [dataForOrder, setDataForOrder] = useState<any[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  updateOrderIdAndPrice(order.Number, storedSeatsDataForTrips!.price);

  const price = selectedSeats.length * Number(storedSeatsDataForTrips!.price);
  const handleClick = async () => {
    try {
      if (passengers.length === 1) {
        await triggerFunc(
          JSON.stringify({
            order_id: order.Number,
            passengers: passengers,
          }),
        );
      } else {
        for (let i = 0; i < passengers.length; i++) {
          await triggerFunc(
            JSON.stringify({
              order_id: order.Number,
              passengers: [passengers[i]],
            }),
          );
        }
      }

      await reserveOrderTrigger({
        orderId: order.Number,
        customerEmail: "example@mail.com",
      });
      const PaymentURL = await makePayment({
        amount: "10",
        orderId: order.Number,
        phoneNumber: "+79005320888",
        email: "example@mail.ru",
      });
      window.open(PaymentURL);
    } catch (e) {
      console.error(e);
    }
  };

  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (loadingData) {
          return;
        }

        setLoadingData(true);

        const responses = await Promise.all(
          selectedSeats.map(async (seat) => {
            const response = await fetch(
              `${baseUrl}add_tickets/?order_id=${
                order.Number
              }&fare_name=Пассажирский&seat_num=${String(
                seat,
              )}&parent_seat_num=${String(seat)}`,
            );

            return await response.json();
          }),
        );

        setDataForOrder(responses);
        setIsDataLoaded(true); // Помечаем, что данные загружены

        setPassengers(
          fetchPassengersNumbers({
            selectedSeats,
            reservedSeats: responses,
          }),
        );
      } catch (error) {
        console.error(`Произошла ошибка при загрузке данных: ${error}`);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-baseline mt-[70px]">
      <div className="mr-[50px]">
        <h3 className="text-[16px]">Данные пассажира</h3>
        <p className="text-[12px] font-light mb-[50px]">
          Указанные данные необходимы для совершения бронирования и будут
          проверены при посадке в автобус.
        </p>
        {isDataLoaded &&
          passengers &&
          passengers.length > 0 &&
          dataForOrder &&
          selectedSeats.map((seat, index) => (
            <TicketInfo
              key={seat}
              place={String(seat)}
              passengers={passengers}
              index={index}
            />
          ))}
        <p className="text-[16px] mt-[30px] mb-[5px]">
          Информация о покупателе
        </p>
        <p className="text-[#676767] text-[12px] text-light mb-[20px]">
          Указывайте корректные e-mail и номер телефона, т.к. они необходимы для
          идентификации пользователя, получения билета, возможности авторизации
          в ЛК и возможности вернуть билет.
        </p>
        <div className="flex">
          <FloatingInput
            placeholder="E-mail"
            containerStyles="mr-[12px]"
            inputValue={`simplemail@mail.ru`}
            onChange={() => null}
            required={true}
          />
          <FloatingInput
            placeholder="Номер телефона"
            inputValue={"Вячеслав"}
            onChange={() => null}
            required={true}
          />
        </div>
      </div>
      <div className="bg-[#fff] px-[25px] pt-[20px] pb-[30px] rounded-[10px]">
        <p className="text-[16px]">О маршруте</p>
        <p className="text-[12px] my-1">
          {order.Departure.Locality} - {order.Destination.Locality}
        </p>
        <div className="rounded-[10px] bg-[#AEC7F954] w-[335px] flex justify-center py-[12px] mb-[15px]">
          <Image src="/receipt.svg" width={20} height={20} alt="receipt" />
          <p className="ml-[8px] text-[#3573F0] text-[12px]">
            Билет можно не печатать
          </p>
        </div>
        <p className="text-[12px] font-semibold mb-[8px]">
          {formatHours(order.DepartureTime)},{" "}
          {formatDayOfMonth(order.DepartureTime)}
        </p>
        <p className="text-[#676767] text-[12px] mb-[18px]">
          {order.Departure.Name}
        </p>

        <p className="text-[12px] font-semibold mb-[8px]">
          {formatHours(order.Trip.ArrivalTime)},{" "}
          {formatDayOfMonth(order.Trip.ArrivalTime)}
        </p>
        <p className="text-[#676767] text-[12px] mb-[18px]">
          {order.Destination.Name}
        </p>

        <p className="text-[12px] font-semibold mb-[8px]">Место</p>
        <p className="text-[#676767] text-[12px] mb-[18px]">
          {selectedSeats.join(" ")}
        </p>
        <div className="flex">
          <DirectionCount icon="/car-white.svg" count={"8,7"} />
          <Image
            src="/wifi-off.svg"
            width="20"
            height="20"
            className="mx-[16px]"
            alt="wifi-off"
          />
          <Image src="/plug-2.svg" width="20" height="20" alt="plug" />
        </div>

        <p className="text-[12px] font-semibold mt-[8px]">
          {order.Trip.CarrierData.CarrierName}
        </p>
        <p className="text-[#676767] text-[12px] pb-[22px] border-b border-[#DADADA]">
          Перевозчик
        </p>

        <div className="flex items-center justify-between pt-[12px]">
          <p className="text-[16px]">К оплате</p>
          <span className="text-[#21D6B1] text-[20px]">
            {selectedSeats.length * Number(storedSeatsDataForTrips?.price)} ₽
          </span>
        </div>
        <p className="text-[#95A4BC] font-light text-[12px] mt-[16px] mb-[20px]">
          Ваши платежные и личные данные надежно защищены в соответствие с
          международными стандартами безопасности.
        </p>
        <Image src="/multi.png" width="150" height="150" alt="multi" />

        <Link href={"#"} className="text-[#3083FF] text-[12px] mt-[20px] block">
          Условия возврата
        </Link>

        <div className="flex items-center mt-[25px] text-[12px]">
          <input
            type="checkbox"
            id="acceptTerms"
            className="h-[45px] w-[45px] cursor-pointer"
          />
          <label htmlFor="acceptTerms" className="ml-2 text-[12px]">
            Я принимаю условия
            <Link href={"#"} className="text-[#3083FF] mx-1 underline-offset-8">
              Пользовательского соглашения
            </Link>
            (публичной оферты) и{" "}
            <Link href={"#"} className="text-[#3083FF] ml-1 underline-offset-8">
              политики конфиденциальности
            </Link>
          </label>
        </div>
        <div className="flex items-center mt-[25px] text-[12px]">
          <input
            type="checkbox"
            id="acceptTerms"
            className="h-[20px] w-[20px] cursor-pointer"
          />
          <label htmlFor="acceptTerms" className="ml-2 text-[12px]">
            Я даю
            <Link href={"#"} className="text-[#3083FF] mx-1 underline-offset-8">
              согласие на обработку персональных данных.
            </Link>
          </label>
        </div>
        <div className="flex justify-end mt-[38px]">
          <CustomButton
            onClick={() => {
              setShowModal(true);
              handleClick().then((res) => console.log(res));
            }}
            title="Перейти к оплате"
            containerStyles="text-white w-[213px] px-8 direction-gardient text-[12px] justify-center h-[40px]"
          />
        </div>
      </div>
      <CustomButton
        title={"Нажми"}
        onClick={() => setIsSuccessModalOpen(true)}
      />
      <Modal
        showModal={isSuccessModalOpen}
        setShowModal={() => setIsSuccessModalOpen(false)}
        content={
          <ModalContentProfile
            setShowModal={setIsSuccessModalOpen}
            order={order}
            selectedSeats={selectedSeats}
          />
        }
      />
    </div>
  );
};

export default PaymentInfo;
