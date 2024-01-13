import Image from "next/image";
import { formatDayOfMonth, formatHours } from "@/helpers/formatDate";
import { Trip } from "@/global";

const BusTicketBottom = ({ trip }: { trip: Trip }) => {
  return (
    <div className="bg-[#fff] rounded-[6px] flex items-start justify-between pb-[25px] px-[30px] pt-[30px] border-t border-[#DCE1E8] relative z-1">
      <div className="flex items-start">
        <div className="mr-10">
          <div className="v8aa v8aa-no">
            <span className="aav9 aa9v aav9-no"></span>
            <span className="a9va aa9v a9va-no aa9v-no"></span>
            <span className="aav9 aa9v1 aav9-no aa9v1-no"></span>
          </div>
          {/*<div className="v8aa v8aa-no">*/}
          {/*  <span className="aav9 aa9v aav9-no"></span>*/}
          {/*  <span className="a9va aa9v a9va-no aa9v-no"></span>*/}
          {/*  <span className="aav9 aa9v1 aav9-no aa9v1-no"></span>*/}
          {/*</div>*/}
        </div>
        <div>
          <p className="font-semibold text-[12px]">{trip.Departure.Name}</p>
          <div className="text-[#676767] text-[10px] font-light flex items-center mb-[35px]">
            <span>
              {formatDayOfMonth(trip.DepartureTime)},{" "}
              {formatHours(trip.DepartureTime)}{" "}
            </span>

            <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
              &bull;
            </span>
            <p> Автовокзал</p>
          </div>

          <p className="font-semibold text-[12px]">{trip.Destination.Name}</p>
          <div className="text-[#676767] text-[10px] font-light flex items-center mb-[35px]">
            <span>
              {formatDayOfMonth(trip.ArrivalTime)},{" "}
              {formatHours(trip.ArrivalTime)}{" "}
            </span>

            <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">
              &bull;
            </span>
            <p> Автовокзал</p>
          </div>

          {/*<p className="font-semibold text-[12px]">Казань</p>*/}
          {/*<div className="text-[#676767] text-[10px] font-light flex items-center">*/}
          {/*  <span>11 мая, 15:00 </span>*/}
          {/*  <span className="text-[#BFD4E4] px-2 text-[20px] leading-0">*/}
          {/*    &bull;{" "}*/}
          {/*  </span>*/}
          {/*  <p>Автовокзал</p>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="w-[240px]">
        <div className="flex items-center">
          <Image src="/info.svg" width={20} height={20} alt="info" />
          <p className="font-semibold text-[12px] ml-1">Перевозчик</p>
        </div>
        <p className="font-semibold text-[12px] my-[12px]">
          Бренд:
          <span className="font-light"> {trip.CarrierData.CarrierName}</span>
        </p>
        <p className="font-semibold text-[12px] mb-[12px]">
          Автобус:
          <span className="font-light"> {trip.Bus.Name}</span>
        </p>
        <p className="font-semibold text-[12px] mb-[12px]">
          Перевозчик:
          <span className="font-light"> {trip.Carrier}</span>
        </p>
        <p className="font-semibold text-[12px] mb-[12px]">
          Адрес:
          <span className="font-light">{trip.Departure.Address}</span>
        </p>
        <p className="font-semibold text-[12px] mb-[12px]">
          ОГРН:
          <span className="font-light">{trip.CarrierData.CarrierTaxId}</span>
        </p>
      </div>
      <div className="w-[210px]">
        <p className="font-semibold text-[12px] my-[12px]">
          Время работы:
          <span className="font-light">
            {" "}
            {trip.CarrierData.CarrierWorkingHours}
          </span>
        </p>
        <p className="font-semibold text-[12px] mb-[12px]">
          Дополнительно:
          <span className="font-light"> {trip.CarrierData.CarrierName}</span>
        </p>
        <p className="font-semibold text-[12px] text-[#23BB9C]">
          Условия возврата
        </p>
      </div>
    </div>
  );
};

export default BusTicketBottom;
