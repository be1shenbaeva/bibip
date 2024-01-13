import Image from "next/image";

const RecentlyInfo = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-[#fff] p-[18px] mr-[25px] rounded-[10px]">
        <Image width={50} height={50} src="/rec-info-1.png" alt="icon" />
        <p className="my-[8px] text-[14px]">Разные виды транспорта</p>
        <p className="text-[12px] text-[#676766]">
          Выбирайте любой удобный для Вас вид транспорта
        </p>
      </div>
      <div className="bg-[#fff] p-[18px] mr-[25px] rounded-[10px]">
        <Image width={50} height={50} src="/rec-info-2.png" alt="icon" />
        <p className="my-[8px] text-[20px] font-semibold">
          Без касс и очередей
        </p>
        <p className="text-[12px] text-[#676766]">
          Билеты онлайн в любое время на сайте и в приложении
        </p>
      </div>
      <div className="bg-[#fff] p-[18px] mr-[25px] rounded-[10px]">
        <Image width={50} height={50} src="/rec-info-3.png" alt="icon" />
        <p className="my-[8px] text-[14px]">Возврат билетов</p>
        <p className="text-[12px] text-[#676766]">
          Быстрое оформление возврата в личном кабинете
        </p>
      </div>
      <div className="bg-[#fff] p-[18px] rounded-[10px]">
        <Image width={50} height={50} src="/rec-info-4.png" alt="icon" />
        <p className="my-[8px] text-[14px]">Направления по всей Стране</p>
        <p className="text-[12px] text-[#676766]">
          Выбирайте из более 50 000 направлений
        </p>
      </div>
    </div>
  );
};

export default RecentlyInfo;
