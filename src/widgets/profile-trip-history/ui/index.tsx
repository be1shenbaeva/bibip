import { TicketInfo } from "@/global";
import Image from "next/image";
import { useState } from "react";

const ProfileTripHistory = ({
  handleFutureClick,
  handlePastClick,
  filteredTickets,
}: {
  handleFutureClick: () => void;
  handlePastClick: () => void;
  filteredTickets: TicketInfo[];
}) => {
  const menuList = [
    {
      title: "Предстоящие поездки",
      src: "/profile-car.svg",
      onClick: handleFutureClick,
    },
    {
      title: "История поездок",
      src: "/profile-calendar.svg",
      onClick: handlePastClick,
    },
    // {
    //   title: "Личные данные",
    //   src: "/profile-check.svg",
    // },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number, onClick: () => void) => {
    setActiveIndex(index);
    onClick();
  };

  return (
    <div className="bg-[#fff] w-[270px] py-[24px] px-[18px] rounded-[10px] max-h-[198px]">
      {menuList.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between border-b pb-[24px] cursor-pointer mb-[24px] ${
            index === menuList.length - 1
              ? "last:border-b-0"
              : "border-b-[#F5F6F8]"
          }`}
          onClick={() => handleItemClick(index, item.onClick)}
        >
          <div className="flex">
            <Image
              src={item.src}
              width={20}
              height={20}
              alt={item.src}
              style={{
                filter:
                  activeIndex === index
                    ? "brightness(0) saturate(100%) invert(90%) sepia(14%) saturate(6171%) hue-rotate(103deg) brightness(96%) contrast(74%)"
                    : "brightness(0) saturate(100%) invert(99%) sepia(73%) saturate(1445%) hue-rotate(176deg) brightness(85%) contrast(86%)",
              }}
            />{" "}
            <p
              className={`text-[14px] ml-[10px]  ${
                activeIndex === index ? "text-[#21D6B1]" : "text-[#171716]"
              }`}
            >
              {item.title}
            </p>
          </div>
          <div>
            <Image
              src="/profile-arrow.svg"
              width={20}
              height={20}
              alt="arrow"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileTripHistory;
