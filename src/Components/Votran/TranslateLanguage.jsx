import React, { useState } from "react";

const TranslateLanguage = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
    // Placeholder translation logic
    setTranslatedText(`Translated: ${inputText}`);
  };

  return (
    <div className="translate-container">
      <h2>Translate your text</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && <p>{translatedText}</p>}
    </div>
  );
};

export default TranslateLanguage;
