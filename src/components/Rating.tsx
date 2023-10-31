import star from "../assets/icon-star.svg";
import { useState } from "react";

interface propType {
  score: number | null;
  setScore: any;
}

const btnArray = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
  {
    id: 3,
    value: 3,
  },
  {
    id: 4,
    value: 4,
  },
  {
    id: 5,
    value: 5,
  },
];

const Rating = (props: propType) => {
  const [tempScore, setTempScore] = useState<null | number>(null);

  const handleBtnClick = (key: number) => {
    setTempScore(key);
  };

  const handleSubmitClick = () => {
    props.setScore(tempScore);
  };

  return (
    <div className="bg-veryDarkBlue h-screen w-full flex items-center justify-center">
      <div className="rounded-3xl bg-[#212832]  p-4 md:p-8 w-[300px] md:w-[400px]">
        <div className="bg-[#262F38] rounded-full p-4 md:mb-4 inline-flex">
          <img src={star} alt="" />
        </div>

        <div className="my-4">
          <h1 className="font-[Overpass] text-white font-medium mb-2 text-3xl">
            How did we do?
          </h1>
          <p className="font-[Overpass] text-mediumGrey">
            Please let us know how we did with you support request. All feedback
            is appreciated to help us improve our offering!
          </p>
        </div>

        <div className="btn-container flex w-full gap-2 md:gap-6 mt-8 mb-8">
          {btnArray.map((item) => (
            <button onClick={() => handleBtnClick(item.value)} key={item.id}>
              <div
                className={`w-12 flex items-center justify-center  p-3 rounded-full  font-[Overpass] ${
                  tempScore === item.value
                    ? "bg-lightGrey text-white"
                    : "bg-[#262F38] text-mediumGrey"
                } hover:bg-orange-500 hover:text-white transition duration-500`}
              >
                {item.value}
              </div>
            </button>
          ))}
        </div>

        <button
          className="bg-orange-500 w-full rounded-3xl p-3 font-[Overpass] text-white hover:bg-white hover:text-orange-500 transition duration-500"
          onClick={() => handleSubmitClick()}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Rating;
