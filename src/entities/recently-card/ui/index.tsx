import { useState } from "react";
import { CustomText } from "@/entities";
import Image from "next/image";
import { RecentlyAccordion } from "@/shared";

export const directionsChildrens = [
  {
    imageSrc: "/card-children-1.png",
    destination: "Москва - Краснодар",
    price: "от 2 180 ₽",
  },
  {
    imageSrc: "/card-children-2.png",
    destination: "Москва - Воронеж",
    price: "от 2 500 ₽",
  },
  {
    imageSrc: "/card-children-3.png",
    destination: "Тула - Москва",
    price: "от 2 300 ₽",
  },
  {
    imageSrc: "/card-children-4.png",
    destination: "Анапа - Краснодар",
    price: "от 2 300 ₽",
  },
  {
    imageSrc: "/card-children-5.png",
    destination: "Новосибирск - Томск",
    price: "от 2 180 ₽",
  },
  {
    imageSrc: "/card-children-6.png",
    destination: "Москва - Тула",
    price: "от 2 500 ₽",
  },
  {
    imageSrc: "/card-children-7.png",
    destination: "Воронеж - Москва",
    price: "от 2 300 ₽",
  },
  {
    imageSrc: "/card-children-8.png",
    destination: "Барнаул - Новосибирск",
    price: "от 2 300 ₽",
  },
  {
    imageSrc: "/card-children-9.png",
    destination: "Москва - Новомосковск",
    price: "от 2 180 ₽",
  },
  {
    imageSrc: "/card-children-10.png",
    destination: "Ереван - Тбилиси",
    price: "от 2 500 ₽",
  },
  {
    imageSrc: "/card-children-11.png",
    destination: "Казань - Йошкар-Ола",
    price: "от 2 300 ₽",
  },
  {
    imageSrc: "/card-children-12.png",
    destination: "Тбилиси - Ереван",
    price: "от 2 300 ₽",
  },
];
const RecentlyCard = () => {
  return (
    <div>
      <CustomText textStyles="text-[20px]" containerStyles="ml-[60px]"/>

      <div className="flex justify-center">
        <div className="bg-[#fff] flex justify-between rounded-[10px] p-[10px] w-[660px] mr-[20px]">
          <div className="w-full">
            <RecentlyAccordion />
            <RecentlyAccordion />
            <RecentlyAccordion />
            <RecentlyAccordion />
          </div>

          <div className="w-full">
            <RecentlyAccordion />
            <RecentlyAccordion />
            <RecentlyAccordion />
            <RecentlyAccordion />
          </div>
        </div>
        <div className="bg-[#fff] flex justify-between rounded-[10px] p-[10px] w-[660px]">
          <div className="w-full">
            <RecentlyAccordion />
            <RecentlyAccordion />
            <RecentlyAccordion />
            <RecentlyAccordion />
          </div>

          <div className="w-full">
            <RecentlyAccordion />
            <RecentlyAccordion />
            <RecentlyAccordion />
            <RecentlyAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyCard;
