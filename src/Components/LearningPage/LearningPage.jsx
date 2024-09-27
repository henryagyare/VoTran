import React from "react";
import "../Votran/Votran.css";

const LearningPage = () => {
  const languages = ["Spanish", "French", "German", "Chinese", "Japanese", "Korean"];

  return (
    <div className="learning-page">
      <h1>Welcome to the Learning Page</h1>
      <div className="language-slides">
        {languages.map((language, index) => (
          <div key={index} className="language-slide">
            {language}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPage;
