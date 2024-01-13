const AppQr = () => {
  return (
    <div className="flex justify-between my-12 md:flex-nowrap flex-wrap items-center lg:my-[200px]">
      <div className="md:w-[50%]">
        <p className="text-[#171716] font-bold text-[20px] mb-[22px]">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al
        </p>
        <p className="text-[#676766] text-[17px]">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al
        </p>
      </div>
      <div className="flex justify-around w-full md:w-fit mt-7">
        <div className="mr-10">
          <p className="text-[#95A4BC] font-semibold mb-3 text-[17px]">
            AppStore
          </p>
          <img src="/appstore-qr.png" alt="" className="w-full" />
        </div>
        <div>
          <p className="text-[#95A4BC] font-semibold mb-3 text-[17px]">
            GooglePlay
          </p>
          <img src="/playmarket-qr.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AppQr;
