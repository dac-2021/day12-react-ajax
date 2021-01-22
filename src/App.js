import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return <HelloAjax />;
}

function HelloAjax() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const res = await fetch(url);
      const data = await res.json();

      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Ajax Demo</h1>

      {posts.map((item, index) => (
        <div
          key={index}
          className="bg-secondary text-light mb-1 d-flex justify-content-center align-items-center"
          style={{
            height: "100px",
            fontSize: "1.25rem",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default App;
