import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(100);
  return (
    <>
      {counter}
      <div>
        <button onClick={(e) => setCounter(counter + 1)}>INC</button>
      </div>
      <Page1 counter={counter} />
      <Page2 counter={counter} />
    </>
  );
}

function Page1(props) {
  const [counter, setCounter] = useState(props.counter);

  return (
    <div>
      Hello {counter}
      <div>
        <button onClick={(e) => setCounter(counter + 1)}>INC</button>
      </div>
    </div>
  );
}

function Page2(props) {
  const [counter, setCounter] = useState(props.counter);

  return <div>World {counter}</div>;
}

export default App;
