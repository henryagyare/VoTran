import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Votran from './Components/Votran/Votran'
import LearningPage from "./Components/LearningPage/LearningPage"
import TranslatorPage from "./Components/TranslatorPage/TranslatorPage.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Votran />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path='/translator' element={<TranslatorPage />} />
      </Routes>
    </Router>
  )
}

export default App