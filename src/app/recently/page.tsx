"use client";
import { ButtonFilter, RecentlyCard } from "@/entities";
import { AppQr, RecentlyInfo } from "@/shared";
import {
  CarTicket,
  DirectionFilter,
  Footer,
  Header,
  SearchSelect,
} from "@/widgets";
import { useGetDirectionsQuery } from "@/services/BibipTripService";

const Recently = () => {
  const { data: Directions } = useGetDirectionsQuery();

  return (
    <>
      <div className="container mx-auto sm:px-10 px-5">
        <Header />
      </div>
      <hr />
      <div className="container mx-auto sm:px-10 px-5">
        <ButtonFilter containerStyles="justify-start" />
        <SearchSelect directions={Directions} setResFromFetch={() => null} />

        <RecentlyCard />
        <AppQr />
        <RecentlyInfo />
      </div>

      <Footer />
    </>
  );
};

export default Recently;
