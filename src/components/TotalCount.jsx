import PropTypes from "prop-types";
import { AiOutlineSchedule, AiOutlineTeam } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";

const TotalCount = ({ data }) => {
  const iconData = [
    // eslint-disable-next-line react/jsx-key
    <AiOutlineSchedule />,
    // eslint-disable-next-line react/jsx-key
    <AiOutlineTeam />,
    // eslint-disable-next-line react/jsx-key
    <BsTags />,
    // eslint-disable-next-line react/jsx-key
    <FiThumbsUp />,
  ];

  return (
    <>
      {data.map((card, i) => {
        return (
          <div
            className="w-[237px] h-26 rounded-xl p-3 shadow-lg mr-4"
            key={card.id}
          >
            <div className="text-2xl text-white bg-[#7FCD93] rounded-full w-8 p-1">{iconData[i]}</div>
            <div className="mt-2">
              <p className="leading-6">Total {card.type}</p>
              <div className="flex justify-between leading-7">
                <p className="text-xl font-bold">${card.revenue}</p>
                <span className="text-[#4AD15F] bg-[#D0F8D6] py-1 px-3 rounded-xl text-sm">
                  &#43; {card.percent}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

TotalCount.propTypes = {
  data: PropTypes.array.isRequired, // You can specify the exact shape of data if needed
};

export default TotalCount;
