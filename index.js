import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Room() {
  const [isLit, setLit] = React.useState(false);
  const brightness = isLit ? "lit" : "dark";

  return (
    <div className={`room ${brightness}`}>
      the room is {isLit ? "lit" : "dark"}
      <br />
      <button onClick={() => setLit(!isLit)}>flip switch</button>
      <button onClick={() => setLit(1)}>flip switch on</button>
      <button onClick={() => setLit(0)}>flip switch off</button>
      <br />
      <p>
        <a href="https://codesandbox.io/s/young-surf-lezwt?fontsize=14&hidenavigation=1&theme=dark">
          <img
            alt="Edit lezwt"
            src="https://codesandbox.io/static/img/play-codesandbox.svg"
          />
        </a>
      </p>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));
