"use client";

import {
  ButtonFilter,
  CardsList,
  CustomText,
  DirectionCardsList,
} from "@/entities";
import Hero from "@/app/home/ui";
import { AppQr } from "@/shared";
import { Footer, SearchSelect } from "@/widgets";
import { useGetDirectionsQuery } from "@/services/BibipTripService";

export default function Home() {
  const { data: Directions } = useGetDirectionsQuery();

  return (
    <>
      <Hero />
      <div className="container mx-auto px-5 mb-8 mt-[70px]">
        <ButtonFilter containerStyles="justify-center" />

        <SearchSelect
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          directions={Directions}
          setResFromFetch={() => null}
        />
        <CardsList />

        <div className="w-[90%] mx-auto">
          <CustomText textStyles="md:text-[36px] text-[30px]" />

          <DirectionCardsList />
          <AppQr />
        </div>
      </div>
      <Footer />
    </>
  );
}
