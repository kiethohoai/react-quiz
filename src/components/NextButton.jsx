import React from "react";

function NextButton({ dispatch, answer, index, numQuestions }) {
  console.log("🚀CHECK  index, numQuestions =", index, numQuestions);
  if (answer === null) return;

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui btn-next"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui btn-next"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
