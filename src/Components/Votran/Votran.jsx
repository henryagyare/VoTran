import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Votran.css";
import { data } from "../../assets/data";

const Votran = () => {
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

  const navigate = useNavigate(); // Use navigate hook

  const beginLearning = () => {
    navigate("/learning"); // Navigate to the new learning page
  };

  const translate = () => {
    navigate("/translator");
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
      <button onClick={beginLearning}>Begin Learning</button>
      <button onClick={translate}>Translator</button>
    </div>
  );
};

export default Votran;
