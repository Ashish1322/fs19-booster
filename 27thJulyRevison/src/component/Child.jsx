import React from "react";

function Child({ temp, count }) {
  console.log("Child is Getting Re-renderd");
  return (
    <div>
      <button onClick={temp}>Call TEmp</button>
    </div>
  );
}

export default React.memo(Child);
