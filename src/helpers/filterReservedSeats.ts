import { BusReserved, Seat } from "@/global";

export function compareAndColorize(
  array1: Seat[],
  array2: BusReserved[],
): (Seat & { Reserved: boolean })[] {
  const resultArray: (Seat & { Reserved: boolean })[] = array1.map((seat) => {
    const isReserved = array2.some(
      (reservedSeat) => reservedSeat.Number === seat.SeatNum,
    );
    return { ...seat, Reserved: isReserved };
  });

  return resultArray;
}
