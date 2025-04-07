import React, { useState } from "react";

//create your first component
const Home = () => {
  // const [color, setColor] = useState("red");
  const colors = ["red", "yellow", "green", "blue"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const color = colors[currentIndex];

  // const handleClickColor = () => {
  //   if (color === "red") {
  //     setColor("yellow");
  //   } else if (color === "yellow") {
  //     setColor("green");
  //   } else if (color === "green") {
  //     setColor("blue");
  //   } else {
  //     setColor("red");
  //   }
  // };

  const handleClickColor = () => {
    let nextIndex = currentIndex + 1;

    if (nextIndex >= colors.length) {
      nextIndex = 0;
    }

    setCurrentIndex(nextIndex);
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        height: "100vh",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1 className="text-center mt-5">Traffic Light</h1>

      <div className="d-flex flex-column align-items-center mt-4">
        <div
          style={{
            backgroundColor: "black",
            borderRadius: "10px",
            padding: "10px",
            border: "2px solid white",
          }}
        >
          <div
            className="rounded-circle mb-2"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "red",
              opacity: color === "red" ? 1 : 0.3,
            }}
          ></div>
          <div
            className="rounded-circle mb-2"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "yellow",
              opacity: color === "yellow" ? 1 : 0.3,
            }}
          ></div>
          <div
            className="rounded-circle mb-2"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "green",
              opacity: color === "green" ? 1 : 0.3,
            }}
          ></div>
          <div
            className="rounded-circle mb-2"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "blue",
              opacity: color === "blue" ? 1 : 0.3,
            }}
          ></div>
        </div>
      </div>
      <a
        onClick={handleClickColor}
        className="btn btn-success"
        style={{ margin: "50px" }}
      >
        Click me!
      </a>
      <p>
        Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        love!
      </p>
    </div>
  );
};

export default Home;
