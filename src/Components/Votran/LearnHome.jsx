import React, { useState } from "react";
import { useRef } from "react";
import "./Votran.css";
import { data } from "../../assets/data";

const Votran = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);


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
        <div className="learnContainer">
            <button>Begin Learning</button>
            <button>Translator</button>
        </div>
    );
};

export default Votran;
