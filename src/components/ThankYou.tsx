import grafitti from "../assets/illustration-thank-you.svg";

interface propType {
    score: null | number;
}

const ThankYou = (props: propType) => {
  return (
    <div className="bg-veryDarkBlue h-screen w-full flex items-center justify-center">
      <div className="rounded-2xl bg-[#212832] px-5 py-12 w-[300px] md:w-[400px]">
        <div className="w-full flex items-center justify-center">
          <img src={grafitti} alt="" />
        </div>

        <div className="w-full flex items-center justify-center my-6">
          <div className="rounded-3xl bg-[#262F38] px-4 py-2">
            <h1 className="font-[Overpass] text-orange-400">You selected {props.score} out of 5</h1>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="font-[Overpass] text-white text-center text-3xl font-medium mb-3">Thank you!</h1>
            <p className="font-[Overpass] text-mediumGrey text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
