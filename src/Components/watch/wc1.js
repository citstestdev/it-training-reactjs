import React, { useEffect, useRef, useState } from "react";
import backendurl from "../../constant";
import { Helmet } from "react-helmet";

function Wc() {
  const [start, setStart] = useState(false);
  // const [start, setStart] = useState(true);
  var [timer, setTimer] = useState(0);
  const tick = useRef();
  var inputRef = useRef(null);
  // const //name = useRef(null);

  useEffect(() => {
    if (start) {
      tick.current = setInterval(() => {
        setTimer(timer++);
      }, 1000);
    } else {
      clearInterval(tick.current);
    }
  }, [start]);

  const startFun = () => {
    alert("fds");
    console.log("jsdk", start);
    setStart(!start);
  };

  const helloChange = (alll) => {
    //alert(alll);
    console.log("fdfdssd", alll);
  };

  function handleClick() {
    console.log(inputRef.current.value);
    // console.log(name.current.value);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{timer}</h1>
        <button onClick={startFun}>Start</button>
      </div>
      <div>
        <input
          type="text"
          id="message"
          name="message"
          ref={inputRef}
          onChange={(e) => {
            helloChange(e.target.value);
          }}
        />
        <input
          type="text"
          id="name"
          name="name"
          ref={inputRef}
          onChange={(e) => {
            helloChange(e.target.value);
          }}
        />

        <button onClick={handleClick}>Log message</button>
      </div>
    </>
  );
}

export default Wc;
