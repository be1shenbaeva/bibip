import { CustomButton } from "@/shared";
import { FC } from "react";
interface BookingStateState {
  activeStylesOne: string;
  activeStylesTwo: string;
  activeStylesThree: string;
}

const BookingState: FC<BookingStateState> = ({
  activeStylesOne,
  activeStylesTwo,
  activeStylesThree,
}) => {
  return (
    <div className="flex justify-between w-[630px] mx-auto mt-[35px]">
      <CustomButton
        title="1 Выбор места"
        containerStyles={`${activeStylesOne}  relative z-1 rounded-[44px] w-[170px] h-[45px]  booking-state-button`}
        textStyles="font-bold text-[14px] "
      ></CustomButton>
      <CustomButton
        title="2 Оформление"
        textStyles="font-bold text-[14px]"
        containerStyles={`${activeStylesTwo} relative  text-[#95A4BC] rounded-[44px]  booking-state-button-two w-[170px]`}
      />
      <CustomButton
        title="3 Оплата"
        textStyles="font-bold text-[14px]"
        containerStyles={`${activeStylesThree} text-[#95A4BC] rounded-[44px] z-1 w-[170px]`}
      />
    </div>
  );
};

export default BookingState;
