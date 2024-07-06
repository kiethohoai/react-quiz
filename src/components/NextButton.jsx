import React from "react";

function NextButton({ dispatch, answer }) {
  if (answer === null) return;
  return (
    <button
      className="btn btn-ui btn-next"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
