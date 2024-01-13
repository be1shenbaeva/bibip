import {
  DirectionsResponse,
  Order,
  ResponseBusSchemeData,
  TripsResponse,
} from "@/global";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = `https://bibiptrip.com/api/avibus/`;
export const bibipTripApi = createApi({
  reducerPath: "directionsAPI",
  tagTypes: ["Directions"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bibiptrip.com/api/avibus",
  }), // Define your API base URL
  endpoints: (builder) => ({
    getDirections: builder.query<DirectionsResponse, void>({
      query: () => `/directions/`,
    }),
    searchTripCities: builder.query<
      TripsResponse,
      { departureCity: string; destinationCity: string; date: string }
    >({
      query: (args) => {
        const { departureCity, destinationCity, date } = args;
        return {
          url: `search_trips_cities/?departure_city=${departureCity}&destination_city=${destinationCity}&date=${date}`,
        };
      },
    }),

    getOccupiedSeats: builder.query<
      ResponseBusSchemeData,
      { tripId: string; departureId: string; destinationId: string }
    >({
      query: (args) => {
        const { tripId, departureId, destinationId } = args;
        return {
          url: `occupied_seats/?trip_id=${tripId}&departure=${departureId}&destination=${destinationId}`,
        };
      },
    }),
    startSaleSession: builder.query<
      Order,
      { tripId: string; departureId: string; destinationId: string }
    >({
      query: (args) => {
        const { tripId, departureId, destinationId } = args;
        return {
          url: `start_sale_session/?trip_id=${tripId}&departure=${departureId}&destination=${destinationId}`,
        };
      },
    }),
    addTickets: builder.query<
      any,
      {
        orderId: string;
        fareName: string;
        seatNum: string;
        parentSeatNum: string;
      }
    >({
      query: (args) => {
        const { orderId, fareName, seatNum, parentSeatNum } = args;
        return {
          url: `add_tickets/?order_id=${orderId}&fare_name=${fareName}&seat_num=${seatNum}&parent_seat_num=${parentSeatNum}`,
        };
      },
    }),
    setTicketData: builder.mutation({
      query: (requestData) => {
        console.log("Request Data", requestData);
        return {
          url: `/set_ticket_data/`,
          method: "POST",
          body: requestData,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    reserveOrder: builder.query({
      query: (args) => {
        const { orderId, customerEmail } = args;
        return {
          url: `reserve_order/?order_id=${orderId}&customer_email=${customerEmail}`,
        };
      },
    }),
    makePayment: builder.mutation({
      query: (args) => {
        const { orderId, amount, token } = args;
        return {
          url: `make_payment/?order_id=${orderId}&amount=${amount}`,
          headers: {
            Authorization: `${token}`,
          },
        };
      },
    }),
    cancelPayment: builder.query({
      query: (args) => {
        const { orderId, amount, fareName, seatNum } = args;
        return {
          url: `api/avibus/cancel_payment/?order_id=${orderId}&amount=${amount}&fare_name=${fareName}&seat_num=${seatNum}`,
        };
      },
    }),
    createReturnOrder: builder.query({
      query: ({
        ticketNumber,
        seatNum,
        departure,
      }: {
        ticketNumber: string;
        seatNum: string;
        departure: string;
      }) =>
        `/create_return_order/?ticket_number=${ticketNumber}&seat_num=${seatNum}&departure=${departure}`,
    }),
    addTicketReturn: builder.query({
      query: ({
        returnOrderId,
        ticketNumber,
        seatNum,
        departure,
      }: {
        returnOrderId: string;
        ticketNumber: string;
        seatNum: string;
        departure: string;
      }) =>
        `/add_ticket_return/?return_order_id=${returnOrderId}&ticket_number=${ticketNumber}&seat_num=${seatNum}&departure=${departure}`,
    }),
    deleteTicketReturn: builder.query({
      query: ({
        returnOrderId,
        ticketNumber,
      }: {
        returnOrderId: string;
        ticketNumber: string;
      }) =>
        `/delete_ticket_return/?return_order_id=${returnOrderId}&ticket_number=${ticketNumber}`,
    }),
    returnPayment: builder.query({
      query: ({
        returnOrderId,
        amount,
      }: {
        returnOrderId: string;
        amount: string;
      }) =>
        `/return_payment/?return_order_id=${returnOrderId}&amount=${amount}`,
    }),
    checkBalance: builder.mutation({
      query: (userData) => {
        return {
          url: "/balance/",
          method: "GET",
          body: userData,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    getTicketInfo: builder.query({
      query: (args) => {
        const { token } = args;
        return {
          url: `get_ticket_info/`,
          headers: {
            Authorization: `${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useGetDirectionsQuery,
  useSearchTripCitiesQuery,
  useLazySearchTripCitiesQuery,
  useGetOccupiedSeatsQuery,
  useStartSaleSessionQuery,
  useLazyAddTicketsQuery,
  useSetTicketDataMutation,
  useLazyReserveOrderQuery,
  useMakePaymentMutation,
  useLazyCancelPaymentQuery,
  useLazyCreateReturnOrderQuery,
  useGetTicketInfoQuery,
  useCreateReturnOrderQuery,
  useLazyAddTicketReturnQuery,
  useLazyReturnPaymentQuery,
} = bibipTripApi;
