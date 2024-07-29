import React, { useContext } from "react";
import { useState } from "react";
import { authContext } from "../AuthContext";

export default function Login() {
  const [email, setEmail] = useState("a.m2002nov@gmail.com");
  const [pass, setPassword] = useState("12345678");

  const { login } = useContext(authContext);

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={() => login(email, pass)}>Login</button>
    </div>
  );
}
