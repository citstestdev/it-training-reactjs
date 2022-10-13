import React, { useState } from "react";
// import backendurl from "../../constant";
// import { Helmet } from "react-helmet";

var time;

function Wc() {
  const [count, setCount] = useState(0);
  const [btn, setBtn] = useState(false);

  const startfun = () => {
    time = setInterval(() => {
      setCount((count) => count + 1);
      setBtn(true);
    }, 1000);
  };
  const stopfun = () => {
    clearInterval(time);
    setBtn(false);
  };

  const resetfun = () => {
    setCount(0);
    setBtn(false);
    clearInterval(time);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{count}</h1>
        <button disabled={btn} onClick={startfun}>
          Start
        </button>
        <button onClick={stopfun}> Stop</button>
        <button onClick={resetfun}> Reset</button>
      </div>
    </>
  );
}

export default Wc;
