import React, { useContext } from "react";
import { useState } from "react";
import { authContext } from "../AuthContext";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const { signup } = useContext(authContext);

  return (
    <div>
      <h1>Signup</h1>
      <input
        onChange={(e) => setEmail(e.currentTarget.value)}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.currentTarget.value)}
        type="password"
        placeholder="Enter Password"
      />
      <button onClick={() => signup(email, pass)}>Signup</button>
    </div>
  );
}
