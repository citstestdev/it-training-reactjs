import React, { useState } from "react";
// import backendurl from "../../constant";
// import { Helmet } from "react-helmet";
var time;

function Wc() {
  var [count, setCount] = useState(0);

  const startFun = () => {
    time = setInterval(() => {
      count = count + 1;
      return setCount(count);
    }, 1000);
  };

  const stopFun = () => {
    clearInterval(time);
  };

  const resetFun = () => {
    setCount(0);
    clearInterval(time);
  };

  return (
    <>
      <div>
        <h1>{Number(count)}</h1>
        <button onClick={startFun}>Start</button>
        <button onClick={stopFun}>Stop</button>
        <button onClick={resetFun}>Reset</button>
      </div>
    </>
  );
}

export default Wc;
