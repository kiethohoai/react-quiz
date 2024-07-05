import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

// todo initialState
const initialState = {
  questions: [],

  // "loading", "error", "ready", "active", "finish"
  status: "loading",
};

// todo reducer
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        staus: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        staus: "error",
      };
    default:
      throw new Error("Action unknow!!!");
  }
}

// todo App
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
