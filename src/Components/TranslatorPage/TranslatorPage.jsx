import React, { useState } from "react";
import "../Votran/Votran.css";

// Create an object to hold the exported variables
let exportedVariables = {
    inputText: "",
    submitVar: "None",
};

// Function to get the exported variables
export const getExportedVariables = () => exportedVariables;

const TranslatorPage = () => {
    const [inputText, setInputText] = useState(""); // State to store input text
    const [submitVar, setSubmitVar] = useState("None"); // State for submitVar

    const translate = () => {
        console.log("Input Text:", inputText);
        setSubmitVar("Translate"); // Update the submitVar state
        exportedVariables.inputText = inputText; // Update exported inputText
        exportedVariables.submitVar = submitVar; // Update exported submitVar
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

// Exporting the TranslatorPage component
export default TranslatorPage;
