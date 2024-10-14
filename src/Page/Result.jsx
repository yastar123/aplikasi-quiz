import StarrySky from "../Animation/StarrSky";
import Anime from "../Animation/anime";
import Img from "../components/Elements/Img";
import Button from "../components/Elements/Button";
import React from "react";

const Result = ({ score, totalAnswers, wrongAnswers }) => {
  return (
    <div className="font-mono">
      <StarrySky />
      <Anime />
      <div className="relative bg-transparent ">
        <div className="absolue w-full block">
          <div className="flex justify-center items-center mt-10">
            <Img
              src="/src/assets/congratulations.png"
              alt=""
              className="w-1/2 lg:w-[30%]"
            />
          </div>
          <div className="lg:shadow-lg lg:rounded-lg lg:max-w-4xl lg:py-10 lg:px-8 lg:mx-auto bg-white z-10 bg-opacity-40 backdrop-blur-lg mt-10 text-[#d1d5db]  text-lg  px-4 py-2">
            <h1 className="text-3xl lg:text-5xl py-4 font-bold text-center text-white">
              Your score is: <span className="text-green-400">{score}0%</span>
            </h1>
            <p className="text-[#d1d5db] text-lg lg:text-2xl mt-5">
              You have completed the quiz with a total of{" "}
              <span className="font-bold text-black">{totalAnswers}</span>{" "}
              questions answered. Out of these, you got{" "}
              <span className="font-bold text-green-400">{score}</span> correct
              answers and{" "}
              <span className="font-bold text-red-400">{wrongAnswers}</span>{" "}
              wrong answers. Well done!
            </p>
            <div className="flex justify-center items-center  my-5">
              <Button
                label="Play Again"
                className="hover:text-black text-white border-2 border-white rounded-full px-4 py-2 hover:bg-white mx-auto max-w-xs"
                onClick={() => window.location.reload()}
              />
            </div>
            <div className="mt-10 flex justify-center items-center gap-x-1 ">
              <p className="lg:text-2xl">Share your score:</p>
              <Img
                src="/src/assets/facebook.svg"
                alt=""
                className="w-8 lg:w-14"
              />
              <Img
                src="/src/assets/whatsapp.svg"
                alt=""
                className="w-8 lg:w-14"
              />
              <Img
                src="/src/assets/instagram.svg"
                alt=""
                className="w-8 lg:w-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
