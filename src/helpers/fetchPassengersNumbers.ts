export const fetchPassengersNumbers = ({
  selectedSeats,
  reservedSeats,
}: {
  selectedSeats: number[];
  reservedSeats: any;
}) => {
  const passengers = [];
  for (let i = 0; i < selectedSeats.length; i++) {
    // const key = "ADT-" + i;
    console.log("Зашёл");
    const passenger = {
      number: reservedSeats[i].TicketSeats.Elements[0].TicketNumber,
      seat_num: String(selectedSeats[i]),
      fare_name: "Пассажирский",
      personal_data: [
        { name: "ФИО", value: "Дроздов Щегол Филинович", value_kind: "ФИО" },
        {
          name: "Удостоверение",
          value: "98 76 543210",
          value_kind: "Паспорт гражданина РФ",
        },
        {
          name: "Номер телефона",
          value: "+79196276777",
          value_kind: "Номер телефона",
        },
        {
          name: "Электронная почта",
          value: "example@gmail.com",
          value_kind: "Электронная почта",
        },
        {
          name: "Мобильный телефон",
          value: "99999999",
          value_kind: "Мобильный телефон",
        },
        {
          name: "Дата рождения",
          value: "1980-02-25T00:00:00",
          value_kind: "Дата рождения",
        },
        {
          name: "Пол",
          value: "Мужской",
          value_kind: "Пол",
        },
        {
          name: "Гражданство",
          value: "Россия",
          value_kind: "Гражданство",
        },
      ],
    };
    // passengers[key] = passenger;
    passengers.push(passenger);
  }

  // if (window) {
  //   const storageKey = "booking:passengers";
  //   sessionStorage.setItem(storageKey, JSON.stringify(passengers));
  // }

  return passengers;
};
