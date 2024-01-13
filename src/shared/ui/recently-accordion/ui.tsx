import Image from "next/image";
import { useState } from "react";

const RecentlyAccordion = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <div className="p-[15px] hover:bg-[#F5F6F8] cursor-pointer">
      <div onClick={toggleAccordion} className="flex justify-between ">
        <div className="flex">
          <div>
            <Image
              width={40}
              height={40}
              src="/card-children-1.png"
              alt="icon"
              className="rounded-[8px] mr-[12px]"
            />
          </div>
          <div>
            <p className="text-[16px] font-semibold">Крым</p>
            <p className="text-[#676767] text-[12px]">3 направления</p>
          </div>
        </div>
        {isAccordionOpen ? (
          <div>
            <Image
              width={24}
              height={24}
              src="/arrow-down.svg"
              alt="icon"
              className="rounded-[8px] mr-[12px]"
            />
          </div>
        ) : (
          <div>
            <Image
              width={24}
              height={24}
              src="/arrow-down-gray.svg"
              alt="icon"
              className="rounded-[8px] mr-[12px]"
            />
          </div>
        )}
      </div>
      {isAccordionOpen && (
        <div className="text-[#3573F0] text-[12px] font-light mt-[18px]">
          <div className="flex mb-[8px]">
            <p className="mr-[20px]">Крым - Севастополь</p>
            <p>от 1 500 ₽</p>
          </div>
          <div className="flex mb-[8px]">
            <p className="mr-[20px]">Крым - Город 2</p>
            <p>от 2 300 ₽</p>
          </div>
          <div className="flex mb-[8px]">
            <p className="mr-[20px]">Крым - Город 3</p>
            <p>от 800 ₽</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentlyAccordion;
