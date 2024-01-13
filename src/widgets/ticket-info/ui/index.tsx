import { CustomSelect, FloatingInput } from "@/shared";
import React, { FC, useState } from "react";
import {
  genderOptions as gender,
  documentOptions as documentType,
  geoOptions as citizenship,
} from "@/var/variables";
import DatePicker from "react-datepicker";
import { TicketData } from "@/global";

interface TicketInfoProps {
  place: string;
  passengers: TicketData[];
  index: number;
}

const TicketInfo: FC<TicketInfoProps> = ({ place, passengers, index }) => {
  // const jsonStringFromStorage = sessionStorage.getItem("booking:passengers");
  // const passengers = JSON.parse(jsonStringFromStorage!);

  const [lastName, setLastName] = useState("Дроздов");
  const [middleName, setMiddleName] = useState("Филинович");
  const [genderPassenger, setGenderPassenger] = useState("Мужской");
  const [document, setDocument] = useState("Паспорт гражданина РФ");
  const [firstName, setFirstName] = useState("Щегол");
  const [birthDate, setBirthDate] = useState(new Date());
  const [userCitizen, setUserCitizen] = useState("РОССИЯ");
  const [documentNumber, setDocumentNumber] = useState("98 76 543210");

  passengers[
    index
  ].personal_data[0].value = `${lastName} ${firstName} ${middleName}`;
  passengers[index].personal_data[1].value = documentNumber;
  passengers[index].personal_data[1].value_kind = document;
  passengers[index].personal_data[5].value = new Date(birthDate).toISOString();
  passengers[index].personal_data[6].value = genderPassenger;
  passengers[index].personal_data[7].value = userCitizen;

  return (
    <div className="flex">
      <div className="flex flex-col mr-[12px]">
        <FloatingInput
          placeholder="Фамилия"
          type="text"
          name="lastName"
          inputValue={String(lastName)}
          onChange={(e) => setLastName(e.target.value)}
          required={true}
        />
        <FloatingInput
          placeholder="Отчество"
          type="text"
          name="middleName"
          inputValue={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          required={false}
        />
        <CustomSelect
          placeholder="Пол"
          options={gender}
          onChange={(value) => setGenderPassenger(value)}
        />
        <CustomSelect
          placeholder="Документ"
          options={documentType}
          onChange={(value) => setDocument(value)}
        />
        <FloatingInput
          placeholder="Ваше место в автобусе"
          mockText={`Место: ${place}`}
          readOnly={true}
          inputValue={place}
          onChange={() => null}
          required={false}
        />
      </div>
      <div>
        <FloatingInput
          placeholder="Имя"
          type="text"
          inputValue={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required={true}
        />
        <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date as Date)}
          placeholderText="Выберите дату"
          className="text-[14px] px-[18px] py-[10px] rounded-[10px] w-[200px] h-[60px] mb-[20px]"
        />
        <CustomSelect
          placeholder="Гражданство"
          options={citizenship}
          onChange={(value) => setUserCitizen(value)}
        />
        <FloatingInput
          placeholder="Номер документа"
          type="text"
          inputValue={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
          required={true}
        />
      </div>
    </div>
  );
};

export default TicketInfo;
