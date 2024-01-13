import Link from "next/link";
import { FC } from "react";

interface ModalContentCarTicketProps {
  setShowModal: (showModal: boolean) => void;
}

const ModalContentCarTicket: FC<ModalContentCarTicketProps> = ({
  setShowModal,
}) => {
  return (
    <div className="flex items-center min-h-screen py-8">
      <div className="relative w-full max-w-[795px] mx-auto bg-white shadow-lg rounded-[20px] ">
        <div className="sm:flex items-center">
          <div className="flex items-center justify-center flex-none w-[50%] mx-auto bg-red-100 rounded-l-[20px]">
            <img
              src="/modal-left.jpg"
              className="w-full h-[545px] rounded-l-[10px]"
            />
          </div>
          <div className="mt-2 text-center sm:px-[50px] sm:text-left relative py-[40px]">
            <div
              className="absolute right-5 top-[8px] cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <img
                src="/close-modal.svg"
                alt=""
                className="w-[18px] h-[18px]"
              />
            </div>
            <h4 className="text-[20px] font-bold">
              Бронируйте места в авто прямо с мобильного приложения!
            </h4>
            <p className="mt-[18px] text-[14px] leading-relaxed text-[#676767]">
              К сожалению, оформление поездок на Автомобилях временно не
              доступно через веб-версию :(
            </p>
            <p className="mt-[24px] text-[14px] leading-relaxed text-[#95A4BC] font-semibold">
              Но вы можете это сделать прямо с телефона!
            </p>
            <div className="flex  mt-[50px] ">
              <div className="mr-[25px]">
                <img src="/appstore-qr.png" alt="" />
                <img
                  src="/download-appstore.png"
                  alt=""
                  className="w-[112px] mt-[15px]"
                />
              </div>
              <div>
                <img src="/playmarket-qr.png" alt="" />
                <img
                  src="/download-playmarket.png"
                  alt=""
                  className="w-[112px] mt-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContentCarTicket;
