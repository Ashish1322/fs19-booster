import React, { useState, useMemo } from "react";

export default function MemoRevision() {
  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState("");

  const hashUserValue = () => {
    console.log("Heavy computation is going on");
    // heavy computation
    let a = 0;
    for (let i = 0; i < 1e6; i++) {
      a += i;
    }
    console.log("Heavy computation is stopeed");
    return a;
  };

  let result = useMemo(() => {
    return hashUserValue();
  }, [userInput]);

  return (
    <div>
      <h1>Memo Revisoin</h1>
      <input
        type="text"
        onChange={(e) => setUserInput(e.currentTarget.value)}
      />
      <hr />
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>

      <hr />
      <h1>Heavy computaton is : {result} </h1>
    </div>
  );
}
