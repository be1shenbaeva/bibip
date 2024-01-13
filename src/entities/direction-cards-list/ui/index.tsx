import { directions, directionsChildrens } from "../model";
import { DirectionCardChildren, DirectionCard } from "@/shared";

const DirectionCardsList = () => {
  const chunkSize = 4;
  const chunkedDirectionsChildrens = [];

  for (let i = 0; i < directionsChildrens.length; i += chunkSize) {
    chunkedDirectionsChildrens.push(
      directionsChildrens.slice(i, i + chunkSize)
    );
  }
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {directions.map((direction, i) => (
          <DirectionCard key={i} {...direction} />
        ))}
      </div>
      <div className="mt-[50px]">
        {chunkedDirectionsChildrens.map((chunk, index) => (
          <div
            className="flex justify-between mb-0 lg:mb-[30px] flex-wrap"
            key={index}
          >
            {chunk.map((direction, i) => (
              <DirectionCardChildren key={i} {...direction} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default DirectionCardsList;
