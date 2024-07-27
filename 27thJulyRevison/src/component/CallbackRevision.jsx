import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function CallbackRevision() {
  const [count, setCount] = useState(0);

  const p = useCallback(() => {
    return function temp() {
      console.log("Hi");
    };
  }, []);

  return (
    <div>
      <h1>use Call Back Revision</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>
      <Child temp={p} />
    </div>
  );
}
