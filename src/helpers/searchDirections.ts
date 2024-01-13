import { DirectionsResponse } from "@/global";

export function searchDirections(
  startingLetters: string,
  directions: DirectionsResponse,
  from: string,
) {
  if (
    startingLetters.trim() === "" ||
    !directions ||
    !directions.travel_directions
  ) {
    return [];
  }
  const results =
    directions &&
    directions.travel_directions.filter((direction) => {
      const name = direction.name.toUpperCase();
      const input = startingLetters.toUpperCase();
      return name.includes(input);
    });

  const indexOfFrom =
    results &&
    results.findIndex((direction) => {
      return direction?.locality === from;
    });

  if (indexOfFrom !== -1) {
    results && results.splice(indexOfFrom, 1);
  }

  return results && results.slice(0, 5);
}
