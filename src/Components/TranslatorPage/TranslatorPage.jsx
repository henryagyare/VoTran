import React, { useState } from "react";
import "../Votran/Votran.css";

const TranslatorPage = () => {
    const [inputText, setInputText] = useState(""); // State to store input text

    const translate = () => {
        // You can use the inputText variable here to perform translation or pass it to another component
        console.log("Input Text:", inputText);
    };

    return (
        <div className="translator-page">
            <h1>Welcome to VoTran Translator</h1>
            <h3>Translate to?: </h3>
            <div className="select-lang">
                <div>Spanish</div>
                <div>French</div>
                <div>Russian</div>
            </div>
            <input
                type="text"
                placeholder="Enter text to translate"
                className="translator-input"
                value={inputText} // Bind the input value to state
                onChange={(e) => setInputText(e.target.value)} // Update state on input change
            />
            <button onClick={translate}>Translate</button>
        </div>
    );
};

export default TranslatorPage;
