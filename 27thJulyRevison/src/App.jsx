import { useState } from "react";
import A from "./component/A";
import D from "./component/D";

import { MyContext } from "./component/MyContext";
import { AuthContext } from "./AuthContext";
function App() {
  const [name, setName] = useState("Ashsi");
  return (
    <div>
      <AuthContext.Provider value={{ age: 31 }}>
        <MyContext.Provider value={{ name }}>
          <A />
        </MyContext.Provider>
        <D />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
