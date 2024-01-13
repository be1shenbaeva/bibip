"use client";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ruLocale from "date-fns/locale/ru";
import Image from "next/image";
import { CustomButton, Modal } from "@/shared";
import { searchDirections } from "@/helpers/searchDirections";
import Dropdown from "@/shared/ui/dropdown/ui";
import { useRouter } from "next/navigation";
import { useLazySearchTripCitiesQuery } from "@/services/BibipTripService";
import { formatDate } from "@/helpers/formatDate";
import { getStoredDataForTrips } from "@/var/localStorage";
import { updateLocalTripStorage } from "@/helpers/updateLocalStorage";
import { DirectionsResponse, TravelDirection } from "@/global";
import { ModalContentLoader } from "@/widgets/modal-content-loader/ui";

interface SearchSelectProps {
  directions: DirectionsResponse | undefined;
  setResFromFetch: Dispatch<SetStateAction<null>>;
}

const SearchSelect: FC<SearchSelectProps> = ({
  directions,
  setResFromFetch,
}) => {
  const [storedDataForTrips, setStoredDataForTrips] = useState(
    getStoredDataForTrips()
  );
  const [from, setFrom] = useState<TravelDirection | null>(
    storedDataForTrips && storedDataForTrips?.from
      ? storedDataForTrips.from
      : null
  );
  const [to, setTo] = useState<TravelDirection | null>(
    storedDataForTrips && storedDataForTrips?.to ? storedDataForTrips.to : null
  );
  const [fromDirections, setFromDirections] = useState<TravelDirection[]>([]);
  const [fromStr, setFromStr] = useState(from?.locality || "");
  const [toDirections, setToDirections] = useState<TravelDirection[]>([]);
  const [toStr, setToStr] = useState(to?.locality || "");
  const [startDate, setStartDate] = useState<Date | null>(
    storedDataForTrips! && storedDataForTrips?.startDate
      ? new Date(storedDataForTrips.startDate)
      : new Date()
  );
  const [isFromInputFocused, setIsFromInputFocused] = useState(false);
  const [isToInputFocused, setIsToInputFocused] = useState(false);
  const router = useRouter();
  const [getTickets, { isSuccess, isLoading }] = useLazySearchTripCitiesQuery();
  const [isLoadingModal, setIsLoadingModal] = useState(false);

  const onSaveTrip = async () => {
    if (from && to && startDate) {
      updateLocalTripStorage(from, to, String(startDate));
      try {
        const res = await getTickets({
          departureCity: from?.locality,
          destinationCity: to?.locality,
          date: formatDate(startDate),
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setResFromFetch(res?.data?.trips);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleFromInputFocus = () => {
    setIsFromInputFocused(true);
  };

  useEffect(() => {
    setStoredDataForTrips(getStoredDataForTrips());
    if (isSuccess) {
      router.push("/direction-bus");
    }
  }, [isSuccess, router]);

  const handleToInputFocus = () => {
    setIsToInputFocused(true);
  };

  const clearToInput = () => {
    setToStr("");
  };
  const clearFromInput = () => {
    setFromStr("");
  };

  return (
    <div className="py-[10px] relative flex items-center mb-7 mt-6 md:justify-between xsm:justify-around xsm:flex-row flex-col justify-start pr-5 bg-[#fff] rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:flex-nowrap flex-wrap">
      <div className="relative min-w-[110px] w-[200px] md:w-[300px] ">
        <Image
          src="/location.svg"
          alt=""
          width="24"
          height="24"
          className="absolute top-[11px] left-[5px]"
        />
        {fromDirections && fromDirections.length !== 0 ? (
          <Dropdown
            content={fromDirections}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setFrom={setFrom}
            setFromDirections={setFromDirections}
            setFromStr={setFromStr}
          />
        ) : null}
        <input
          type="text"
          placeholder="Откуда"
          className={`w-full py-3 pl-12 pr-10 rounded-r-none border-r border-[#F5F5F5] rounded-md focus:outline-none focus:ring focus:border-blue-300 text-[16px]  ${
            isFromInputFocused ? "pr-14" : ""
          }`}
          value={fromStr}
          onFocus={handleFromInputFocus}
          onChange={(e) => {
            setFromDirections(
              searchDirections(
                e.target.value,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                directions,
                fromStr
              )
            );
            setFromStr(e.target.value);
          }}
        />
        {isFromInputFocused && (
          <button
            onClick={clearFromInput}
            className="absolute right-3 top-[11px] transform  w-6 h-6 text-gray-400"
          >
            <Image src="/x-circle.svg" width={24} height={25} alt="circle" />
          </button>
        )}
      </div>
      <div className="relative min-w-[110px] w-[200px] md:w-[300px]">
        <Image
          src="/location-tick.svg"
          width="24"
          height="24"
          alt=""
          className="absolute top-[10px] left-[5px]"
        />
        {toDirections && toDirections.length !== 0 ? (
          <Dropdown
            content={toDirections}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setFrom={setTo}
            setFromDirections={setToDirections}
            setFromStr={setToStr}
          />
        ) : null}
        <input
          type="text"
          placeholder="Куда"
          className={`w-full py-3 pl-11 pr-10 rounded-l-none rounded-md focus:outline-none focus:ring focus:border-blue-300 text-[16px]  ${
            isToInputFocused ? "pr-14" : ""
          }`}
          value={toStr}
          onFocus={handleToInputFocus}
          onChange={(e) => {
            setToDirections(
              searchDirections(
                e.target.value,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                directions,
                toStr
              )
            );
            setToStr(e.target.value);
          }}
        />
        {isToInputFocused && (
          <button
            onClick={clearToInput}
            className="absolute right-3 top-[11px] transform  w-6 h-6 text-gray-400"
          >
            <Image src="/x-circle.svg" width={24} height={25} alt="circle" />
          </button>
        )}
      </div>
      <div className="relative flex my-5 m-auto md:m-0">
        <div className="flex">
          <Image src="/note.svg" width={24} height={25} alt="note" />
          <div className="ml-[14px]">
            <p className="text-[#95A5BC] text-[12px] ">Дата отправления</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date as Date)}
              locale={ruLocale}
              dateFormat="dd MMM eeeeee"
              placeholderText="Выберите дату"
              className="text-[14px] "
            />
          </div>
        </div>
      </div>
      <Modal
        showModal={isLoading}
        setShowModal={setIsLoadingModal}
        content={<ModalContentLoader setShowModal={setIsLoadingModal} />}
      />
      <div className="md:ml-10 ml-0 py-2 md:w-fit w-full">
        <CustomButton
          title="Найти"
          containerStyles="bg-[#FFA723] text-white font-medium text-[15px] min-w-[194px] md:m-0 m-auto"
          onClick={onSaveTrip}
        />
      </div>
    </div>
  );
};

export default SearchSelect;
