export interface LocalStorageTrip {
  tripId: string;
  departureId: string;
  destinationId: string;
  bus: string;
  busModel: string;
  departureTime: string;
  arrivalTime: string;
  departureName: string;
  destinationName: string;
  price: string;
  carrier: string;
  orderId?: string;
  timestamp?: number
}

export interface LocalStorageDirection {
  from: {
    id: string;
    name: string;
    locality: string;
  };
  to: {
    id: string;
    name: string;
    locality: string;
  };
  startDate: string;
}

export interface LocalStorageOrder {
  orderId: string
  price: string
}

const getStoredDataForTrips = () => {
  let storedDataForTripsString;

  if (typeof window !== "undefined" && window.localStorage) {
    storedDataForTripsString = localStorage.getItem("dataForBuyTicket") || "";
  }

  let storedDataForTrips: LocalStorageDirection | null;

  try {
    storedDataForTrips = storedDataForTripsString
      ? JSON.parse(storedDataForTripsString)
      : null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    storedDataForTrips = null;
  }

  return storedDataForTrips;
};

export { getStoredDataForTrips };

// seatStorageUtils.js

const getStoredSeatsDataForTrips = () => {
  let dataForSeats;

  if (typeof window !== "undefined" && window.localStorage) {
    dataForSeats = localStorage.getItem("dataForSeats");
  }

  let storedSeatsDataForTrips: LocalStorageTrip | null;

  try {
    storedSeatsDataForTrips = dataForSeats ? JSON.parse(dataForSeats) : undefined;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    storedSeatsDataForTrips = null;
  }

  if (storedSeatsDataForTrips && storedSeatsDataForTrips.timestamp) {
    const tenMinutesInMilliseconds = 10 * 60 * 1000; // 10 минут в миллисекундах
    const currentTime = new Date().getTime();

    // Если прошло более 10 минут, удаляем данные
    if (currentTime - storedSeatsDataForTrips.timestamp > tenMinutesInMilliseconds) {
      localStorage.removeItem("dataForSeats");
      storedSeatsDataForTrips = null;
    }
  }

  return storedSeatsDataForTrips;
};

export { getStoredSeatsDataForTrips };


const getStoredOrderId = () => {
  let storedOrderId;

  if (typeof window !== "undefined" && window.localStorage) {
    storedOrderId = localStorage.getItem("orderId") || "";
  }

  let storedOrderIdForTrips: LocalStorageOrder | null;

  try {
    storedOrderIdForTrips = storedOrderId
      ? JSON.parse(storedOrderId)
      : null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    storedOrderIdForTrips = null;
  }

  return storedOrderIdForTrips;
};

export { getStoredOrderId };
