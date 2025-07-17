import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => prev - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Counter</h2>
      <h1>{count}</h1>
      <button onClick={decrease} style={{ marginRight: "10px" }}>- Decrease</button>
      <button onClick={increase}>+ Increase</button>
    </div>
  );
}

export default Counter;
