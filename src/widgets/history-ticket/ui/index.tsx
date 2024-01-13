import { TicketInfo } from "@/global";
import { formatDayOfMonth } from "@/helpers/formatDate";
import { CustomButton } from "@/shared";

const HistoryTicket = ({ticket}: {ticket: TicketInfo}) => {
  return (
    <div className="bg-[#fff] flex justify-between items-center  rounded-[10px] p-[24px] mb-[10px] w-[550px]">
      <div className="w-[50%]">
        <div className="flex">
          <p className="text-[#95A4BC] text-[12px] mr-[12px]">{formatDayOfMonth(ticket.departure_time)}</p>
          <p className="text-[#95A4BC] text-[12px] font-light">1 пассажир</p>
        </div>
        <div>
          <p>{ticket.departure_name} - {ticket.destination_name}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-[#95A4BC] text-[16px] font-semibold">{ticket.total_amount} ₽</span>
        <CustomButton
          title="Искать похожие"
          containerStyles="bg-[transparent] border-[1.5px] border-[#FFA723] text-[#FFA723] ml-[20px] px-[16px] py-[16.5px]"
        />
      </div>
    </div>
  );
};

export default HistoryTicket;
