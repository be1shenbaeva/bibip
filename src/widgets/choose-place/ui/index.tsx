import Image from "next/image";
import { compareAndColorize } from "@/helpers/filterReservedSeats";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addSelectedSeat, removeSelectedSeat } from "@/slices/seats-slice";
import { BusReserved, Seat } from "@/global";

const ChoosePlace = ({
  seatsScheme,
  reserved,
}: {
  seatsScheme: Seat[];
  reserved: BusReserved[];
}) => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector(
    (state: RootState) => state.selectedSeats.selectedSeats,
  );

  const totalSeats = seatsScheme.length;
  const seatsPerColumn = 5;
  const resArray = compareAndColorize(seatsScheme, reserved);

  const chunkedSeats = [];
  for (
    let columnIndex = 0;
    columnIndex < totalSeats;
    columnIndex += seatsPerColumn
  ) {
    chunkedSeats.push(
      resArray.slice(columnIndex, columnIndex + seatsPerColumn),
    );
  }

  const handleSeatClick = (seatNum: number) => {
    const clickedSeat = resArray.find((seat) => seat.SeatNum === seatNum);

    if (clickedSeat && !clickedSeat.Reserved) {
      if (selectedSeats.includes(seatNum)) {
        dispatch(removeSelectedSeat(seatNum));
      } else {
        dispatch(addSelectedSeat(seatNum));
      }
    }
  };

  return (
    <div className="border flex border-[#95A5BC] rounded-[40px] px-[80px] py-[18px] mt-[40px] relative">
      {chunkedSeats.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col flex-grow">
          {column.reverse().map((seat, seatIndex) => (
            <div key={seatIndex}>
              {seat && seat.SeatNum === 0 ? (
                <div
                  className={`bg-[#F5F5F5] rounded-[6px] w-[45px] h-[45px] text-[#95A4BC] mb-[12px] `}
                ></div>
              ) : (
                <div
                  className={`w-[45px] h-[45px] ${
                    seat.Reserved
                      ? `bg-[#E4E9F0] text-[#95A4BC]`
                      : selectedSeats.includes(seat.SeatNum)
                      ? `bg-[#22BB9C]  text-[#FFFF]`
                      : `border-[#22BB9C] bg-[#fff] text-[#95A4BC]`
                  }   rounded-[6px] border-2 px-[9px] pt-[9px] mb-[12px]`}
                  onClick={() => handleSeatClick(seat.SeatNum)}
                >
                  <p className="flex justify-center text-[14px]">
                    {seat.SeatNum}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
      <Image
        src="/car-steering-wheel.png"
        width={45}
        height={45}
        alt="car-steering-wheel"
        className="absolute left-[17px] bottom-[30px]"
      />
    </div>
  );
};

export default ChoosePlace;
