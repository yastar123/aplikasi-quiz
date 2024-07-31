/* eslint-disable react/prop-types */

import Loading from "../../Page/Loading";
const Question = ({ question, handleAnswer }) => {
  
  if (!question) {
    return <div><Loading /></div>;
  }

  const { question: questionText, correct_answer, options } = question;

  return (
    <div className="lg:rounded-lg shadow-lg lg:max-w-3xl lg:mx-auto lg:p-10 px-4 py-2 mt-10 text-white bg-white z-10 bg-opacity-40 backdrop-blur-lg">
      <div className=" text-xl lg:mb-14">
        <h2>{questionText}</h2>
      </div>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option === correct_answer)}
          className="block lg:font-bold lg:tracking-widest my-4 w-full z-20 py-3 text-lg rounded-full bg-gradient-to-r from-[#022f40] to-[#38a9cc]
            text-[#d1d5db]"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
