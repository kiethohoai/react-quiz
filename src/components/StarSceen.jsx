import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function StarSceen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui btn-start"
      >
        Let's start
      </button>
    </div>
  );
}

export default StarSceen;
