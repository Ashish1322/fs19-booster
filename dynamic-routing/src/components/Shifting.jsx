import React, { useState } from "react";

export default function Shifting() {
  const [left, setLeft] = useState([
    {
      name: "USA",
      checked: false,
    },
    {
      name: "UAE",
      checked: false,
    },
    {
      name: "India",
      checked: false,
    },
    {
      name: "Australia",
      checked: false,
    },
    {
      name: "Canda",
      checked: false,
    },
  ]);
  const [right, setRight] = useState([]);

  const moveAllRight = () => {
    setRight([...right, ...left]);
    setLeft([]);
  };

  const moveAllLeft = () => {
    setLeft([...left, ...right]);
    setRight([]);
  };

  const handleCheckBoxClickLeft = (index) => {
    let temp = [...left];
    temp[index].checked = !temp[index].checked;
    setLeft(temp);
  };

  const handleCheckBoxClickRight = (index) => {
    let temp = [...right];
    temp[index].checked = !temp[index].checked;
    setRight(temp);
  };

  const shiftSelectedToRight = () => {
    let templeft = [];
    let tempright = [];
    for (let item of left) {
      if (item.checked == true) {
        tempright.push(item);
      } else {
        templeft.push(item);
      }
    }
    setLeft(templeft);
    setRight([...right, ...tempright]);
  };

  const shiftSelectedToLeft = () => {
    let templeft = [];
    let tempright = [];
    for (let item of right) {
      if (item.checked == true) {
        templeft.push(item);
      } else {
        tempright.push(item);
      }
    }
    setRight(tempright);
    setLeft([...left, ...templeft]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <div
        style={{ width: "400px", border: "1px solid black", padding: "10px" }}
      >
        {left.map((item, index) => {
          return (
            <div>
              <input
                onChange={() => handleCheckBoxClickLeft(index)}
                id={`inp${index}`}
                type="checkbox"
                checked={item.checked}
              />{" "}
              <label for={`inp${index}`}>{item.name}</label>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button disabled={left.length == 0} onClick={moveAllRight}>
          {">>"}
        </button>
        <button onClick={shiftSelectedToRight}>{">"}</button>
        <button disabled={right.length == 0} onClick={moveAllLeft}>
          {"<<"}
        </button>
        <button onClick={shiftSelectedToLeft}>{"<"}</button>
      </div>
      <div
        style={{ width: "400px", border: "1px solid black", padding: "10px" }}
      >
        {right.map((item, index) => {
          return (
            <div>
              <input
                onChange={() => handleCheckBoxClickRight(index)}
                id={`inpright${index}`}
                type="checkbox"
                checked={item.checked}
              />{" "}
              <label for={`inpright${index}`}>{item.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
