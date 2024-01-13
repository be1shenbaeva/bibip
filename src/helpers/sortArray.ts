import { Trip } from "@/global";

export const sortArrayByCost = (trips: Trip[]) => {
  return [...trips].sort((trip1: Trip, trip2: Trip) => {
    const cost1 = parseInt(trip1.PassengerFareCost, 10);
    const cost2 = parseInt(trip2.PassengerFareCost, 10);
    return cost1 - cost2;
  });
};

export const sortArrayByDepartureTime = (trips: Trip[]): Trip[] => {
  return [...trips].sort((a, b) => {
    const dateA = new Date(a.DepartureTime);
    const dateB = new Date(b.DepartureTime);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return dateA - dateB;
  });
};

export const sortArrayByArrivalTime = (trips: Trip[]): Trip[] => {
  return [...trips].sort((a, b) => {
    const dateA = new Date(a.ArrivalTime);
    const dateB = new Date(b.ArrivalTime);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return dateA - dateB;
  });
};

export const sortArrayByDestination = (trips: Trip[]) => {
  return [...trips].sort((a, b) => {
    const durationA = a.Duration;
    const durationB = b.Duration;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return durationA - durationB;
  });
};
