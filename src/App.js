import "./App.css";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const rsState = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      Hello World {rsState.count}
      <button onClick={(e) => dispatch({ type: "INC" })}>INC</button>
      <Page1 />
      <Page2 />
    </>
  );
}

function Page1() {
  const rsState = useSelector((state) => state);
  return <div>Page 1 {rsState.count}</div>;
}

function Page2() {
  const rsState = useSelector((state) => state);
  return <div>Page 2 {rsState.count}</div>;
}

export default App;
