interface TicketInfo {
  arrival_time: string;
  departure_id: string;
  departure_name: string;
  departure_time: string;
  destination_name: string;
  is_returned: boolean;
  licence_plate: string;
  order_id: string;
  payment_id: string | null;
  receipt_email: string | null;
  route_name: string;
  seat_num: string;
  ticket_num: string;
  token: string;
  total_amount: string;
  total_amount_avibus: string;
}

export function filterObjectsByFutureDates(ticketArray: TicketInfo[]) {
  const currentDate = new Date();

  return ticketArray.filter((ticket) => {
    const objectDate = new Date(ticket.departure_time);
    return objectDate > currentDate;
  });
}

export function filterObjectsByPastDates(ticketArray: TicketInfo[]) {
  const currentDate = new Date();

  return ticketArray.filter((ticket) => {
    const objectDate = new Date(ticket.departure_time);
    return objectDate < currentDate;
  });
}
