import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const formatDate = (dateString: Date | string) => {
  let date = dateString;
  if (typeof date === "string") {
    date = new Date(dateString);
  }
  const formattedDate = format(date, "yyyy-MM-dd", { locale: ruLocale });

  return `${formattedDate}`;
};

export const formatDateWithDots = (dateString: Date | string) => {
  let date = dateString;
  if (typeof date === "string") {
    date = new Date(dateString);
  }
  const formattedDate = format(date, "yyyy.MM.dd", { locale: ruLocale });

  return `${formattedDate}`;
};

export const formatDayOfMonth = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const formattedDate = `${day} ${month}`;
  return formattedDate;
};

export const formatHours = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
