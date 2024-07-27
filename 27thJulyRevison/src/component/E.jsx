import React from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { MyContext } from "./MyContext";
export default function E() {
  const { name } = useContext(MyContext);
  const { age } = useContext(AuthContext);
  return (
    <div>
      <h3>
        This is E and name is {name} age is {age}
      </h3>
    </div>
  );
}
