"use client";
import { ChoosePlace, Footer, Header } from "@/widgets";
import { TreeSite } from "@/entities";
import { BookingPlaceInfo, BookingState, Modal } from "@/shared";
import { MoreTicket } from "@/features";
import Image from "next/image";
import { useGetOccupiedSeatsQuery } from "@/services/BibipTripService";
import React, { useEffect, useState } from "react";
import { getStoredSeatsDataForTrips } from "@/var/localStorage";
import { ModalContentLoader } from "@/widgets/modal-content-loader/ui";

const BookingBus = () => {
  const [storedSeatsDataForTrips, setStoredSeatsDataForTrips] = useState(
    getStoredSeatsDataForTrips()
  );

  const { data: seats, isFetching } = useGetOccupiedSeatsQuery({
    tripId: storedSeatsDataForTrips!.tripId,
    destinationId: storedSeatsDataForTrips!.destinationId,
    departureId: storedSeatsDataForTrips!.departureId,
  });

  useEffect(() => {
    setStoredSeatsDataForTrips(getStoredSeatsDataForTrips());
  }, []);

  return (
    <>
      <div className="container mx-auto sm:px-10 px-5">
        <Header />
      </div>
      <hr />
      <div className="container mx-auto sm:px-10 px-5">
        <div className="max-w-[840px] mx-auto">
          <TreeSite />
          <BookingState
            activeStylesOne="bg-[#21D6B1] text-[#fff] w-[180px]"
            activeStylesTwo="bg-[#fff] w-[180px]"
            activeStylesThree="bg-[#fff] w-[180px]"
          />
          <MoreTicket />
          <p className="text-center mt-[40px] mb-[15px] text-[14px] text-[#95A4BC]">
            Выберите места на схеме автобуса
          </p>
          <div className="flex justify-center">
            <Image width={25} height={25} src="/bus-gray.svg" alt="" />
            <p className="text-[#22BB9C] ml-1 text-[16px]">
              Автобус:
              <span className="uppercase text-[#000]">
                {storedSeatsDataForTrips!.busModel}
              </span>
            </p>
          </div>
          <ChoosePlace
            seatsScheme={seats?.Bus?.SeatsScheme ?? []}
            reserved={seats?.return?.Elements ?? []}
          />
          <BookingPlaceInfo
            seatsScheme={seats?.Bus?.SeatsScheme ?? []}
            reserved={seats?.return?.Elements ?? []}
            tripId={storedSeatsDataForTrips?.tripId}
          />
        </div>
      </div>
      {isFetching && (
        <Modal
          showModal={isFetching}
          setShowModal={() => null}
          content={<ModalContentLoader setShowModal={() => null} />}
        />
      )}
      123dkmf
      <Footer />
    </>
  );
};

export default BookingBus;
