import Image from "next/image";
import { DirectionInfo } from "@/entities";
import { formatDayOfMonth, formatHours } from "@/helpers/formatDate";
import { formatDuration } from "@/helpers/formatDuration";
import { CustomButton, DirectionCount } from "@/shared";
import { Ticket } from "@/global";
import { Dispatch, SetStateAction } from "react";
import {
  useLazyAddTicketReturnQuery,
  useLazyCreateReturnOrderQuery,
  useLazyReturnPaymentQuery,
} from "@/services/BibipTripService";
import { cancelPayment } from "@/services/cancelPayment";

export const ModalTicketInfo = ({
  ticket,
  setShowModal,
}: {
  ticket: Ticket;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [createReturnOrder] = useLazyCreateReturnOrderQuery();
  const [addTicketReturn] = useLazyAddTicketReturnQuery();
  const [returnPayment] = useLazyReturnPaymentQuery();

  const handleCancelClick = async () => {
    // const res = await createReturnOrder({
    //   ticketNumber: ticket.ticket_num,
    //   seatNum: ticket.seat_num,
    //   departure: ticket.departure_id,
    // });
    //
    // await addTicketReturn({
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   returnOrderId: res.data.Number,
    //   ticketNumber: ticket.ticket_num,
    //   seatNum: ticket.seat_num,
    //   departure: ticket.departure_id,
    // });

    await cancelPayment({
      PaymentId: ticket.payment_id_tinkoff,
      token: ticket.token_tinkoff,
    });

    // await returnPayment({
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   returnOrderId: res.data.Number,
    //   amount: ticket.total_amount,
    // });
  };

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
          {ticket.departure_name} - {ticket.destination_name}
        </h4>
        <div className="border-b border-[#DADADA] pb-[18px]">
          <div className="flex items-baseline">
            <DirectionInfo
              departure={ticket.departure_name}
              departureStation={ticket.departure_name}
              arrival={ticket.destination_name}
              arrivalStation={ticket.destination_name}
              timeOfDeparture={formatHours(ticket.departure_time)}
              timeOfArrival={formatHours(ticket.arrival_time)}
              containerStyles="profile-line"
              timeInWay={formatDuration(Number(ticket.departure_time))}
            />
            <p className="text-[10px] text-[#FF5959]">
              {formatDayOfMonth(ticket.arrival_time)}
            </p>
          </div>
        </div>
        <div className="mt-[25px]">
          <div className="flex justify-between">
            <div className="flex">
              <DirectionCount icon="/bus-white.svg" count={"8,7"} />
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
              Место:
              <span className="text-[#95A4BC]">{ticket.seat_num} место</span>
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
                {ticket.destination_name}
              </p>
              <div className="text-[#676767] text-[10px] font-light flex items-center mb-[35px]">
                <span>
                  {formatDayOfMonth(ticket.departure_time)},{" "}
                  {formatHours(ticket.departure_time)}{" "}
                </span>
                <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
                  &bull;
                </span>
                <p>{ticket.destination_name}</p>
              </div>
              <p className="font-semibold text-[12px]">
                {ticket.departure_name}
              </p>
              <div className="text-[#676767] text-[10px] font-light flex items-center mb-[35px]">
                <span>
                  {formatDayOfMonth(ticket.arrival_time)},{" "}
                  {formatHours(ticket.arrival_time)}{" "}
                </span>
                <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
                  &bull;
                </span>
                <p>{ticket.departure_name}</p>
              </div>
            </div>
          </div>
          <div className="rounded-[10px] w-full bg-[#AEC7F954]  flex justify-center py-[12px] my-[25px]">
            <Image src="/receipt.svg" width={20} height={20} alt="receipt" />
            <p className="ml-[8px] text-[#3573F0] text-[12px]">
              Билет можно не печатать
            </p>
          </div>
          <CustomButton
            title="Отменить бронь"
            containerStyles="bg-[#FF3A44] text-white w-full my-[30px]"
            onClick={handleCancelClick}
          />
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
