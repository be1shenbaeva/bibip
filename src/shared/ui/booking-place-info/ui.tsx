import { CustomButton } from "@/shared";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedSeats } from "@/slices/seats-slice";
import { useEffect } from "react";
import Link from "next/link";
import { BusReserved, Seat } from "@/global";

const BookingPlaceInfo = ({
  seatsScheme,
  reserved,
  tripId,
}: {
  seatsScheme: Seat[];
  reserved: BusReserved[];
  tripId: string | undefined;
}) => {
  const selectedSeats = useSelector(
    (state: RootState) => state.selectedSeats.selectedSeats
  );
  const dispatch = useDispatch();

  const allSeats: Seat[] = [];
  for (let i = 0; i < seatsScheme.length; i++) {
    if (seatsScheme[i].SeatNum !== 0) {
      allSeats.push(seatsScheme[i]);
    }
  }

  const handlePopstate = () => {
    dispatch(clearSelectedSeats());
  };

  useEffect(() => {
    handlePopstate();
  }, []);

  return (
    <div className="flex items-baseline justify-between mt-[40px] text-[14px]">
      <div>
        <p className="mb-[22px]">
          Свободно:{" "}
          <span className="text-[#95A4BC]">
            {allSeats.length - reserved.length} мест
          </span>
        </p>
        <div className="flex items-baseline">
          <div className="flex items-center mb-2 mr-[40px]">
            <span className="w-[22px] h-[22px] border-[#22BB9C] rounded-[4px] border-2 px-[9px] pt-[9px] bg-[#fff]"></span>
            <p className="text-[12px] font-light ml-2">Cвободное</p>
          </div>
          <div className="flex items-center">
            <span className="w-[22px] h-[22px] border-[#95A4BC] rounded-[4px] border-2 px-[9px] pt-[9px] bg-[#E4E9F0]"></span>
            <p className="text-[12px] font-light ml-2">Занятое</p>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="font-light">Выбрано:</p>
        <p className="font-semibold text-[18px]">
          {selectedSeats.length === 0
            ? "Места не выбраны"
            : selectedSeats.join(", ") + " места"}
        </p>
        <Link href={`/direction-bus/${tripId}/payment`}>
          <CustomButton
            title="Далее"
            containerStyles="text-white px-8 w-full direction-gardient text-[12px] justify-center h-[40px] mt-[20px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default BookingPlaceInfo;
