import React, { useState } from "react";
import "../Votran/Votran.css";

// Create an object to hold the exported variables
let exportedVariables = {
    inputText: "",
    submitVar: "None",
    selectedLang: "",
};

// Function to get the exported variables
export const getExportedVariables = () => exportedVariables;

const TranslatorPage = () => {
    const [inputText, setInputText] = useState(""); // State to store input text
    const [submitVar, setSubmitVar] = useState("None"); // State for submitVar
    const [selectedLang, setSelectedLang] = useState(""); // State for selected language

    const translate = () => {
        console.log("Input Text:", inputText);
        console.log("Selected Language:", selectedLang);
        setSubmitVar("Translate"); // Update the submitVar state

        // Update the exported variables
        exportedVariables.inputText = inputText;
        exportedVariables.submitVar = submitVar;
        exportedVariables.selectedLang = selectedLang;
    };

    const handleLanguageSelect = (language) => {
        setSelectedLang(language); // Update the selected language state
        exportedVariables.selectedLang = language; // Update the exported variable
        console.log("Language Selected:", language);
    };

    return (
        <div className="translator-page">
            <h1>Welcome to VoTran Translator</h1>
            <h3>Translate to?: </h3>
            <div className="select-lang">
                <div onClick={() => handleLanguageSelect("Spanish")}>Spanish</div>
                <div onClick={() => handleLanguageSelect("French")}>French</div>
                <div onClick={() => handleLanguageSelect("Russian")}>Russian</div>
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
