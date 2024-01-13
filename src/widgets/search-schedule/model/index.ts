export const fetchDirections = async () => {
  const apiResponse = await fetch(
    "http://158.160.112.171/api/avibus/directions",
  );

  if (!apiResponse.ok) {
    throw new Error("Fetch not ok");
  }

  return await apiResponse.json();
};

interface TripQuery {
  departureCity: string;
  destinationCity: string;
  date: Date | null;
}

interface QueryOptions {
  queryKey: TripQuery[];
}
export const fetchAvailableTrips = async ({ queryKey }: QueryOptions) => {
  const { departureCity, destinationCity, date } = queryKey[0];

  const apiResponse = await fetch(
    `http://158.160.112.171/api/avibus/search_trips_cities/?departure_city=${departureCity}&destination_city=${destinationCity}&date=${date}`,
  );

  if (!apiResponse.ok) {
    throw new Error("Some parameters are wrong");
  }

  return await apiResponse.json();
};
