import "./App.css";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const rdState = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      {rdState.counter}
      <div>
        <button onClick={(e) => dispatch({ type: "INC" })}>INC</button>
      </div>
      <Page1 />
      <Page2 />
    </>
  );
}

function Page1(props) {
  const rdState = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      Hello {rdState.counter}
      <div>
        <button onClick={(e) => dispatch({ type: "INC" })}>INC</button>
      </div>
    </div>
  );
}

function Page2(props) {
  const rdState = useSelector((state) => state);

  return <div>World {rdState.counter}</div>;
}

export default App;
