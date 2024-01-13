import { Dispatch, SetStateAction } from "react";
import { TravelDirection } from "@/global";

const Dropdown = ({
  content,
  setFrom,
  setFromDirections,
  setFromStr,
}: {
  content: TravelDirection[];
  setFrom: Dispatch<SetStateAction<TravelDirection>>;
  setFromDirections: Dispatch<SetStateAction<TravelDirection[]>>;
  setFromStr: Dispatch<SetStateAction<string>>;
}) => (
  <div className="relative inline-block top-9">
    <div className="absolute bg-white min-w-[280px] max-h-[300px] z-10 px-[16px] py-[16px] overflow-y-auto rounded-xl">
      <ul>
        {content.map((element) => (
          <li className="py-1" key={element.id}>
            <div
              className="hover:bg-slate-100 transition duration-300 ease-in-out px-2"
              onClick={() => {
                setFromStr(element.locality);
                setFrom(element);
                setFromDirections([]);
              }}
            >
              <p>{element.locality}</p>
              <p className="text-xs text-slate-300">{element.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Dropdown;
