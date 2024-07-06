import React from "react";
function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage >= 0 && percentage < 50) emoji = "😂";
  if (percentage >= 50 && percentage < 80) emoji = "😎";
  if (percentage >= 80 && percentage < 100) emoji = "😋";
  if (percentage === 100) emoji = "😍";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>Your scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%) <span>{emoji}</span>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <button
        className="btn btn-ui btn-restart"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
