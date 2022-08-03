import { useState } from "react";
import "./App.css";

const data = [1, 2, 3, 4];

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      <h1>Carousel</h1>
      <div>{data[index]}</div>
      <button
        onClick={() => {
          if (index !== 0) setIndex((prevIndex) => prevIndex - 1);
          else {
            setIndex(data.length - 1);
          }
        }}
      >
        &lt;
      </button>
      <button
        onClick={() => {
          if (index < data.length - 1) setIndex((prevIndex) => prevIndex + 1);
          else {
            setIndex(0);
          }
        }}
      >
        &gt;
      </button>
      <div className="dots-container">
        {Array(data.length)
          .fill("")
          .map((item, indices) => (
            <div
              key={indices}
              onClick={() => {
                setIndex(indices);
              }}
              className={`${indices === index ? "dots" : "dot-in"}`}
            >
              {item}
            </div>
          ))}
      </div>
      <div className="dot-active"></div>
      <div className="dot-in"></div>
    </div>
  );
}

export default App;
