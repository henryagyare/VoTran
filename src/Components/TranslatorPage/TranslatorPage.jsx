import React from "react";
import "../Votran/Votran.css";


const TranslatorPage = () => {
    const translate = () => {

    }



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
            />
            <button onClick={translate}>Translate</button>
        </div>
    );
};

export default TranslatorPage;
