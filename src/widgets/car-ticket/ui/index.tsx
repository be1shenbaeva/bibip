import { DirectionInfo } from "@/entities";
import { DirectionCount, DirectionUser, CustomButton } from "@/shared";
import Image from "next/image";
import { FC } from "react";

interface CarTicketProps {
  setShowModal: (showModal: boolean) => void;
}

const CarTicket: FC<CarTicketProps> = ({ setShowModal }) => {
  return (
    <div className="bg-[#fff] rounded-[6px] flex items-center justify-between pl-8 pt-[50px] pb-[25px]">
      <div>
        <span className="text-[#21D6B1] font-medium text-[24px]">600 ₽</span>
        <div className="flex">
          <div className="flex items-center py-5">
            <DirectionCount icon="/car-white.svg" count={10} />
            <DirectionUser icon="/user-direction.png" name="Алексей Иванов" />
            <div className="bg-[#E4E9F0] flex justify-center rounded-[6px]">
              <p className="text-[#95A4BC] text-[12px] px-1">
                Toyota Land Cruiser
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#E4E9F0] w-[130px] flex justify-center rounded-[6px] mb-[30px]">
          <p className="text-[#676767] text-[12px]">
            Свободно: <span className="text-[#95A4BC]">3 места</span>
          </p>
        </div>
        <DirectionInfo
          departure="Казань"
          arrival="Сочи"
          timeOfDeparture="17:50"
          timeOfArrival="09:00"
        />
        <CustomButton
          title="Забронировать место"
          onClick={() => setShowModal(true)}
          containerStyles="mt-20 text-white px-8 direction-gardient text-[12px]"
        />
      </div>
      <div className="bg-[#FCFCFC] w-[296px]">
        <div className="flex">
          <div>
            <Image
              src="/line-direction.png"
              width="1"
              height="1"
              alt=""
              className="mr-[1px]"
            />
          </div>
          <div className="px-[23px] py-[50px]">
            <div className="flex">
              <div>
                <div className="flex items-center mb-[20px]">
                  <Image
                    src="/sofa.svg"
                    width="25"
                    height="25"
                    alt=""
                    className="w-6"
                  />
                  <p className="mx-2 text-[#676767] text-[12px]">
                    2 места на заднем сиденье
                  </p>
                </div>
                <div className="flex">
                  <Image
                    src="/github.svg"
                    width="25"
                    height="25"
                    alt=""
                    className="w-6"
                  />
                  <p className="mx-2 items-center text-[#676767] text-[12px]">
                    Можно с животными
                  </p>
                </div>
              </div>
              <div className="ml-[10px]">
                <Image
                  src="/check.svg"
                  width="25"
                  height="25"
                  alt=""
                  className="w-[16px] mb-[30px]"
                />
                <Image
                  src="/check.svg"
                  width="25"
                  height="25"
                  alt=""
                  className="w-[16px]"
                />
              </div>
            </div>
            <p className="mt-[26px] text-[12px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTicket;
