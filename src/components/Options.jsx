import React from "react";

function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button key={option} className="btn btn-options">
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
