import { FC } from "react";
import { Card } from "./type";

const Card: FC<Card> = ({ src, alt, text, bg, className }) => {
  return (
    <div>
      <div className={className}>
        <img src={src} alt={alt} className="mx-auto mb-8" />
      </div>
      <div className="w-[160px] h-[190px] relative">
        <p className="text-[18px] font-semiboldflex justify-between text-center mt-[80px]">
          {text}
        </p>
        <img src={bg} alt={alt} className="absolute top-[-29px]" />
      </div>
    </div>
  );
};

export default Card;
