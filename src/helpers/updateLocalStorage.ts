import { Trip } from "@/global";

export function updateLocalStorage(trip: Trip) {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(
      "dataForSeats",
      JSON.stringify({
        tripId: trip.Id,
        departureId: trip.Departure.Id,
        destinationId: trip.Destination.Id,
        bus: trip.Bus.Name,
        busModel: trip.Bus.Model,
        departureTime: trip.DepartureTime,
        arrivalTime: trip.ArrivalTime,
        departureName: trip.Departure.Name,
        destinationName: trip.Destination.Name,
        price: trip.PassengerFareCost,
        carrier: trip.CarrierData.CarrierName,
      }),
    );
  }
}

export function updateLocalTripStorage(
  from: { id: string; name: string; locality: string },
  to: { id: string; name: string; locality: string },
  startDate: string,
) {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(
      "dataForBuyTicket",
      JSON.stringify({
        from,
        to,
        startDate,
      }),
    );
  }
}

export function updateOrderIdAndPrice(orderId: string, price: string) {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(
      "orderId",
      JSON.stringify({
        orderId,
        price,
      }),
    );
  }
}
