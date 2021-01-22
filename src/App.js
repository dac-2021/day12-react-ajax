import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return <HelloAjax />;
}

function HelloAjax() {
  const [facts, setFacts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://cat-fact.herokuapp.com/facts/random";
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      setFacts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3 className="bg-primary text-light p-2">Cat Facts</h3>

      <div
        className="d-flex justify-content-center align-items-center "
        style={{
          height: "95vh",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        {facts.text}
      </div>
    </div>
  );
}

export default App;
