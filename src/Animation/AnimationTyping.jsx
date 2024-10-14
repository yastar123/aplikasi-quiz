import React, { useState, useEffect } from "react";
import Button from "../components/Elements/Button";

const AnimationTyping = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const textArray = [
    "Oops! Page not found...",
    "Something seems wrong...",
    "Try returning to the main page.",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, textArray, typingSpeed]);

  return (
    <div className="flex items-center justify-center h-screen bg-transparent ">
      <div className="py-8 px-4 lg:py-8 max-w-3xl mx-auto lg:px-6 bg-[#022f40]  bg-opacity-50 bg-transparent rounded-lg">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl opacity-50 tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <h1 className="text-2xl my-6 font-bold text-white">{displayText}</h1>
          <Button text={"Back to main page"} onClick={() => window.location.href = "/"} className={"bg-white opacity-50 hover:text-white hover:text-opacity-50 hover:bg-black hover:bg-opacity-50 mt-5 text-2xl rounded-xl font-bold px-6 py-4"} />
        </div>
      </div>
    </div>
  );
};

export default AnimationTyping;
