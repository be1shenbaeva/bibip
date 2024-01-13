import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#fff] ">
      <div className="flex flex-wrap lg:justify-between justify-evenly items-center mt-10 py-10 text-[#676766] container mx-auto sm:px-10 px-5">
        <div className="flex xsm:justify-center items-center xsm:flex-nowrap flex-wrap">
          <div className="mr-[90px] lg:mr-12 xl:mr-56 mb-7 xsm:mb-0">
            <img  src="/logo.png" alt="logo" />
            <p className="text-[#95A4BC] text-[14px] mt-[11px] font-medium">
              Покупка автобусных билетов
            </p>
          </div>
          <div className="flex items-baseline xsm:flex-nowrap flex-wrap">
            <div className="flex  flex-col mr-[55px] w-[130px] font-medium text-[12px]">
              <Link href="/about" className="mb-1">
                О нас
              </Link>
              <Link href="/about" className="mb-1">
                Частые вопросы
              </Link>
              <Link href="/about" className="mb-1">
                Вернуть билет
              </Link>
              <Link href="/about" className="mb-1">
                Блог
              </Link>
            </div>
            <div className="flex flex-col font-medium text-[12px]">
              <Link href="/about" className="mb-1">
                Контактная информация
              </Link>
              <Link href="/about" className="mb-1">
                Политика конфиденциальности
              </Link>
              <Link href="/about" className="mb-1">
                Договор оферты
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:m-0 m-auto mt-9">
          <p className="lg:text-right text-center mb-[18px] font-medium text-[14px]">
            Скачайте наше <br /> мобильное приложение!
          </p>
          <div className="flex">
            <img
              src="/download-appstore.png"
              alt=""
              className="mr-[8px] w-[130px]"
            />
            <img src="/download-playmarket.png" alt="" className="w-[130px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
