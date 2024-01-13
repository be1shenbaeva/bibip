import "./index.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const arrayOfWords: string[] = [
  "Выбираем лучшие автобусы...",
  "Подбираем оптимальный маршрут...",
  "Ищем лучшие цены...",
];

export const ModalContentLoader = ({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Увеличиваем индекс слова на 1
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % arrayOfWords.length);
    }, 1000); // Интервал в миллисекундах (1 секунда)

    // Очищаем таймаут при размонтировании компонента
    return () => clearTimeout(timeoutId);
  }, [currentWordIndex, setShowModal]);

  return (
    <div className="flex items-center min-h-screen py-8">
      <div className="relative w-full max-w-[430px] mx-auto bg-white shadow-lg rounded-[20px] text-center px-[30px]">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>{arrayOfWords[currentWordIndex]}</p>
      </div>
    </div>
  );
};
