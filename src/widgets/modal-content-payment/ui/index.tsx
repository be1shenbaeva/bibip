"use client";

import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";
import { registration } from "@/services/registration";
import {
  setPhoneToSessionStorage,
  setTokenToSessionStorage,
} from "@/var/sessionStorage";
import { cleanPhoneNumber } from "@/helpers/cleanPhoneNumber";
import { CustomButton } from "@/shared";

interface ModalContentPayment {
  setShowModal: (showModal: boolean) => void;
  code: string;
  phoneNumber: string;
  setToken: Dispatch<SetStateAction<string>>;
  setLogin: Dispatch<SetStateAction<string>>;
  isRegistered: boolean;
}
const ModalContentPayment: FC<ModalContentPayment> = ({
  setShowModal,
  code,
  phoneNumber,
  setToken,
  setLogin,
  isRegistered,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Фильтрация ввода, чтобы оставить только числа
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value.replace(/(\d)(?=(\d{1})+(\d{1})?$)/g, "$1 ");
    const formattedNumber = cleanPhoneNumber(phoneNumber);
    if (value.length <= 6) {
      setInputValue(formattedValue);

      if (value.length === 6) {
        if (code == value) {
          setIsError(false);
          if (isRegistered) {
            registration({
              phoneNumber: formattedNumber,
              email: undefined,
              firstName: undefined,
            }).then((res) => {
              setToken(res.token);
              setTokenToSessionStorage(res.token);
              setLogin(phoneNumber);
              setPhoneToSessionStorage(phoneNumber);
            });
            setShowModal(false);
          }
        } else {
          setIsError(true);
        }
      }

      if (value.length < 6) {
        setIsError(false);
      }
    }
  };

  const handleSubmit = () => {
    const value = inputValue.replace(/\D/g, "");
    const formattedValue = value.replace(/(\d)(?=(\d{1})+(\d{1})?$)/g, "$1 ");
    const formattedNumber = cleanPhoneNumber(phoneNumber);

    if (value.length <= 6) {
      setInputValue(formattedValue);
      if (value.length === 6) {
        if (code == value) {
          setIsError(false);
          registration({
            phoneNumber: formattedNumber,
            email: email,
            firstName: name,
          }).then((res) => {
            setToken(res.token);
            setTokenToSessionStorage(res.token);
            setLogin(phoneNumber);
            setPhoneToSessionStorage(phoneNumber);
          });
        }
      }
    }
  };

  return (
    <div className="flex items-center min-h-screen py-8 text-black">
      <div className="relative w-full max-w-[430px] mx-auto bg-white shadow-lg rounded-[20px] text-center px-[30px]">
        <div className="sm:flex items-center">
          <div className="mt-10 text-center sm:px-[50px] sm:text-left ">
            <div
              className="absolute right-5 top-6 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <Image
                src="/close-modal.svg"
                alt="Close Icon"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
        <h4 className="text-[20px] font-semibold">
          Подтверждение бронирования
        </h4>
        <p>Введите код, отправленный на Ваш номер</p>

        <p className="font-semibold text-[18px] mt-[35px] mb-[25px]">
          {phoneNumber}
        </p>
        <p className="font-light">
          Билеты из заказа будут автоматически привязаны к вашему номера
          телефона
        </p>
        {!isRegistered ? (
          <div className="flex flex-col">
            <div className="flex flex-col  mb-5">
              <label htmlFor="email" className="p-2 text-left">
                Email
              </label>
              <input
                type="email"
                placeholder="Введите ваш email"
                className="p-2"
                required={true}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="p-2 text-left">
                Ваше имя
              </label>
              <input
                type="text"
                placeholder="Введите ваше имя"
                className="p-2"
                required={true}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <input
              type="text"
              onChange={handleInputChange}
              value={inputValue}
              placeholder="_ _ _ _ _ _"
              className="flex p-[10px] box-border border-0 outline-none text-[64px] mx-auto w-[370px] text-center"
            />
            <CustomButton
              title="Зарегестрироваться"
              onClick={handleSubmit}
              containerStyles="bg-[#22BB9C] text-white mb-5"
            />
          </div>
        ) : (
          <input
            type="text"
            onChange={handleInputChange}
            value={inputValue}
            placeholder="_ _ _ _ _ _"
            className="flex p-[10px] box-border border-0 outline-none text-[64px] mx-auto w-[370px] text-center"
          />
        )}
        {/*<div className="rounded-[10px] bg-[#AEC7F954] w-[335px] flex justify-center py-[12px] mt-[15px] mb-[30px] mx-auto">*/}
        {/*  <p className="text-[#3573F0] text-[12px] font-light">*/}
        {/*    Изменить номер телефона*/}
        {/*  </p>*/}
        {/*</div>*/}

        {isError && <p className="text-red-500">Неверный код</p>}
      </div>
    </div>
  );
};

export default ModalContentPayment;
