"use client";

import { ButtonFilter } from "@/entities";
import {
  CarTicket,
  DirectionFilter,
  Footer,
  Header,
  ModalContentCarTicket,
} from "@/widgets";
import SearchSelect from "@/widgets/search-schedule/ui";
import React, { useState } from "react";
import { Modal } from "@/shared";
import { useGetDirectionsQuery } from "@/services/BibipTripService";

const DirectionCar = () => {
  const [showModal, setShowModal] = useState(false);
  const { data: Directions } = useGetDirectionsQuery();

  return (
    <>
      <div className="container mx-auto sm:px-10 px-5">
        <Header />
      </div>
      <hr />
      <div className="container mx-auto sm:px-10 px-5 mt-[25px]">
        <ButtonFilter containerStyles="justify-start" />
        <SearchSelect directions={Directions} setResFromFetch={() => null} />
        <div className="max-w-[840px] mx-auto">
          <DirectionFilter
            route="4 поездки"
            passengers="1"
            handleSortByTravelTime={() => ""}
            handleSortByArrivalTime={() => ""}
            handleSortByCost={() => ""}
            handleSortByDepartureTime={() => ""}
          />
          <CarTicket setShowModal={setShowModal} />
        </div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          content={<ModalContentCarTicket setShowModal={setShowModal} />}
        />
      </div>
      
      <Footer />
    </>
  );
};

export default DirectionCar;
