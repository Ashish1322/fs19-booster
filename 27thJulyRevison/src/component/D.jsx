import React from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { MyContext } from "./MyContext";
export default function D() {
  const { age } = useContext(AuthContext);
  return (
    <div>
      <h1>This is D age is {age}</h1>
    </div>
  );
}
