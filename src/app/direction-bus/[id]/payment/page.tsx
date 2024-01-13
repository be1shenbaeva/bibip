"use client";
import { Footer, Header } from "@/widgets";
import { PaymentInfo, TreeSite } from "@/entities";
import { BookingState, Modal } from "@/shared";
import { useEffect, useState } from "react";
import { useStartSaleSessionQuery } from "@/services/BibipTripService";
import { getStoredSeatsDataForTrips } from "@/var/localStorage";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { ModalContentLoader } from "@/widgets/modal-content-loader/ui";

const PayBus = () => {
  const [showModal, setShowModal] = useState(false);
  const [storedSeatsDataForTrips, setStoredSeatsDataForTrips] = useState(
    getStoredSeatsDataForTrips()
  );

  const { data: order, isFetching } = useStartSaleSessionQuery({
    tripId: storedSeatsDataForTrips!.tripId,
    destinationId: storedSeatsDataForTrips!.destinationId,
    departureId: storedSeatsDataForTrips!.departureId,
  });
  const selectedSeats = useSelector(
    (state: RootState) => state.selectedSeats.selectedSeats
  );

  const router = useRouter();

  useEffect(() => {
    setStoredSeatsDataForTrips(getStoredSeatsDataForTrips());
    if (selectedSeats.length === 0) {
      router.push(`/direction-bus/${storedSeatsDataForTrips?.tripId}`);
    }
  }, [order]);

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
            activeStylesOne="bg-[#fff] text-[#22BB9C] after:border-[#22BB9C] w-[180px]"
            activeStylesTwo="bg-[#21D6B1] text-[#fff] after:border-[#a6efe0] after:right-[-24px] w-[180px]"
            activeStylesThree="bg-[#fff] z-[1]"
          />
          {order && (
            <PaymentInfo
              setShowModal={setShowModal}
              order={order}
              selectedSeats={selectedSeats}
            />
          )}
        </div>
      </div>
      {isFetching && (
        <Modal
          showModal={isFetching}
          setShowModal={() => setShowModal(false)}
          content={<ModalContentLoader setShowModal={() => null} />}
        />
      )}
      <Footer />
    </>
  );
};

export default PayBus;
