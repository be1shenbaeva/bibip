"use client";

import { ButtonFilter } from "@/entities";
import { BusTicket, DirectionFilter, Footer, Header } from "@/widgets";
import SearchSelect from "@/widgets/search-schedule/ui";
import React, { useEffect, useState } from "react";
import {
  sortArrayByArrivalTime,
  sortArrayByCost,
  sortArrayByDepartureTime,
  sortArrayByDestination,
} from "@/helpers/sortArray";
import {
  useGetDirectionsQuery,
  useSearchTripCitiesQuery,
} from "@/services/BibipTripService";
import { formatDate } from "@/helpers/formatDate";
import { isArray } from "is-what";
import { getStoredDataForTrips } from "@/var/localStorage";
import { getTokenFromSessionStorage } from "@/var/sessionStorage";
import { Trip } from "@/global";
import { Modal } from "@/shared";
import { ModalContentLoader } from "@/widgets/modal-content-loader/ui";

const DirectionBus = () => {
  const [storedDataForTrips, setStoredDataForTrips] = useState(
    getStoredDataForTrips()
  );
  const [sortedTrips, setSortedTrips] = useState<Trip[]>([]);
  const [isSortedAsc, setIsSortedAsc] = useState(true);
  const { data: Directions, isFetching } = useGetDirectionsQuery();
  const [trips, setTrips] = useState<Trip[]>([]);
  const [resFromFetch, setResFromFetch] = useState(null);
  const [token, setToken] = useState<string>("");
  const [isLoadingModal, setIsLoadingModal] = useState(false);

  const { data: availableTicketsQuery } = useSearchTripCitiesQuery({
    departureCity:
      storedDataForTrips &&
      storedDataForTrips.from &&
      storedDataForTrips.from.locality
        ? storedDataForTrips.from.locality
        : "",
    destinationCity:
      storedDataForTrips &&
      storedDataForTrips.to &&
      storedDataForTrips.to.locality
        ? storedDataForTrips.to.locality
        : "",
    date: storedDataForTrips ? formatDate(storedDataForTrips.startDate) : "",
  });

  useEffect(() => {
    const availableTrips = availableTicketsQuery?.trips || [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setToken(getTokenFromSessionStorage());
    setStoredDataForTrips(getStoredDataForTrips());
    if (resFromFetch) {
      setTrips(resFromFetch);
    } else {
      if (availableTrips) setTrips(availableTrips);
    }
  }, [resFromFetch, availableTicketsQuery, getStoredDataForTrips]);

  const handleSortByCostClick = () => {
    if (trips) {
      let sortedTrips;
      if (isSortedAsc) {
        sortedTrips = sortArrayByCost(trips);
      } else {
        sortedTrips = sortArrayByCost(trips).reverse();
      }
      setSortedTrips(sortedTrips);
      setIsSortedAsc(!isSortedAsc);
    }
  };

  const handleSortByDepartureClick = () => {
    if (trips) {
      let sortedTrips;
      if (isSortedAsc) {
        sortedTrips = sortArrayByDepartureTime(trips);
      } else {
        sortedTrips = sortArrayByDepartureTime(trips).reverse();
      }
      setSortedTrips(sortedTrips);
      setIsSortedAsc(!isSortedAsc);
    }
  };

  const handleSortByArrivalClick = () => {
    if (trips) {
      let sortedTrips;
      if (isSortedAsc) {
        sortedTrips = sortArrayByArrivalTime(trips);
      } else {
        sortedTrips = sortArrayByArrivalTime(trips).reverse();
      }
      setSortedTrips(sortedTrips);
      setIsSortedAsc(!isSortedAsc);
    }
  };

  const handleSortArrayByDurationClick = () => {
    if (trips && trips) {
      let sortedTrips;
      if (isSortedAsc) {
        sortedTrips = sortArrayByDestination(trips);
      } else {
        sortedTrips = sortArrayByDestination(trips).reverse();
      }
      setSortedTrips(sortedTrips);
      setIsSortedAsc(!isSortedAsc);
    }
  };

  const tripsToDisplay = sortedTrips.length > 0 ? sortedTrips : trips;

  return (
    <>
      <div className="bg-[#fff] relative pb-[130px]">
        <div className="container mx-auto sm:px-10 px-5 ">
          <Header />
        </div>
        <hr />
      </div>

      <div className="container mx-auto sm:px-10 px-5 relative mt-[-150px]">
        <ButtonFilter containerStyles="justify-start mt-[45px]" />
        <SearchSelect
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          directions={Directions}
          setResFromFetch={setResFromFetch}
        />
        <div className="max-w-[840px] mx-auto">
          <DirectionFilter
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            route={trips && trips.length}
            passengers="2"
            handleSortByCost={handleSortByCostClick}
            handleSortByDepartureTime={handleSortByDepartureClick}
            handleSortByArrivalTime={handleSortByArrivalClick}
            handleSortByTravelTime={handleSortArrayByDurationClick}
          />
          {isArray(tripsToDisplay)
            ? tripsToDisplay.map((trip: Trip) => (
                <BusTicket
                  key={trip.Id}
                  trip={trip}
                  setToken={setToken}
                  token={token}
                />
              ))
            : null}
        </div>
      </div>
      {isFetching && (
        <Modal
          showModal={isFetching}
          setShowModal={() => setIsLoadingModal(false)}
          content={<ModalContentLoader setShowModal={setIsLoadingModal} />}
        />
      )}
      <Footer />
    </>
  );
};

export default DirectionBus;
