import React, { useState } from "react";
import { useRef } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAnswer = (element, answer) => {
    if (lock == false) {
      if (question.ans == answer) {
        element.target.classList.add("correct");
        setLock(true);
        setScore((prevScore) => {
          prevScore = prevScore + 1;
          return prevScore;
        });
      } else {
        element.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (index == data.length - 1) {
      setResult(true);
      return 0;
    }
    if (lock == true) {
      setIndex((index = index + 1));
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const resetAction = () => {
    setResult(false);
    setIndex(0);
    setLock(false);
    setQuestion(data[0]);
    setScore(0);
  };

  return (
    <div className="container">
      <h1>React Quiz App</h1>
      <hr />
      {result ? (
        <>
          <h2>
            You scored {score} out of {data.length}
          </h2>
          <button onClick={resetAction}>Reset</button>
        </>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li
              ref={Option1}
              onClick={(element) => {
                checkAnswer(element, 1);
              }}
            >
              {question.option1}
            </li>
            <li
              ref={Option2}
              onClick={(element) => {
                checkAnswer(element, 2);
              }}
            >
              {question.option2}
            </li>
            <li
              ref={Option3}
              onClick={(element) => {
                checkAnswer(element, 3);
              }}
            >
              {question.option3}
            </li>
            <li
              ref={Option4}
              onClick={(element) => {
                checkAnswer(element, 4);
              }}
            >
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
