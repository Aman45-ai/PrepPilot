import { useEffect, useState } from 'react'
import QuestionContext from './QuestionContext'

const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem('questions')) || []);
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  },[questions])
  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  )
}

export default QuestionProvider
