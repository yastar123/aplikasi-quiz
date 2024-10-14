import { useState, useEffect } from "react";
import getQuiz from "../api/QuizApi";
import Question from "../components/Layout/Question";
import ProgressBar from "../components/Layout/ProgressBar";
import StarrySky from "../Animation/StarrSky";
import Anime from "../Animation/anime";
import { Book } from "lucide-react";
import Result from "./Result";
import Loading from "./Loading";
import withAuth from "../hooks/Otentikasi";
import React from "react";



const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(4000);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    getQuiz((data) => {
      setQuizData(data);
    });

    const savedState = localStorage.getItem("quizState");
    if (savedState) {
      const {
        savedQuizData,
        savedCurrentQuestionIndex,
        savedScore,
        savedProgress,
        savedTimeLeft,
        savedTotalAnswers,
        savedWrongAnswers,
      } = JSON.parse(savedState);
      setQuizData(savedQuizData);
      setCurrentQuestionIndex(savedCurrentQuestionIndex);
      setScore(savedScore);
      setProgress(savedProgress);
      setTimeLeft(savedTimeLeft);
      setTotalAnswers(savedTotalAnswers);
      setWrongAnswers(savedWrongAnswers);
    }
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showResults) {
      setShowResults(true);
      localStorage.removeItem("quizState");
    }
  }, [timeLeft, showResults]);

  useEffect(() => {
    if (currentQuestionIndex >= quizData.length && quizData.length > 0) {
      setShowResults(true);
      localStorage.removeItem("quizState");
    } else if (quizData.length > 0) {
      const quizState = {
        savedQuizData: quizData,
        savedCurrentQuestionIndex: currentQuestionIndex,
        savedScore: score,
        savedProgress: progress,
        savedTimeLeft: timeLeft,
        savedTotalAnswers: totalAnswers,
        savedWrongAnswers: wrongAnswers,
      };
      localStorage.setItem("quizState", JSON.stringify(quizState));
    }
  }, [
    currentQuestionIndex,
    quizData,
    score,
    progress,
    timeLeft,
    totalAnswers,
    wrongAnswers,
  ]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
    setTotalAnswers(totalAnswers + 1);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setProgress(((currentQuestionIndex + 1) / quizData.length) * 100);
  };

  if (quizData.length === 0) {
    return <Loading />;
  }

  if (showResults) {
    return (
      <Result
        score={score}
        totalAnswers={totalAnswers}
        wrongAnswers={wrongAnswers}
      />
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="font-mono">
      <StarrySky />
      <Anime />
      <div className="relative bg-transparent">
        <div className="absolue w-full block">
          <div>
            {currentQuestion && (
              <div className="flex justify-between text-xl p-4 text-white bg-gradient-to-r from-[#022f40] to-[#38a9cc] bg-opacity-50">
                <p>{currentQuestion.category}</p>
                <Book size={30} />
              </div>
            )}
          </div>
          <div className="px-4 lg:max-w-3xl lg:mx-auto">
            <ProgressBar progress={progress} />
          </div>
          <div
            className="flex justify-between border-b py-2 mt-5 text-lg font-semibold text-[#d1d5db] px-4 
          lg:max-w-3xl lg:mx-auto"
          >
            <div>Time: {timeLeft}s</div>
            <div>
              Question {currentQuestionIndex + 1} / {quizData.length}
            </div>
          </div>
          {currentQuestion && (
            <div>
              <div className="flex justify-center items-center  text-[#d1d5db] text-lg font-semibold mt-10">
                Difficulty: {currentQuestion.difficulty}
              </div>
              <Question
                question={currentQuestion}
                handleAnswer={handleAnswer}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withAuth(Quiz);
