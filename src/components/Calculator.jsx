import { useState } from "react";
import Display from "./Display"
import Button from "./Button"

// Steps
// 1. Get numbers working - be able to type multidigit numbers in the display
// 2. Be able to clear the display
// 3. Addition operator

export default function Calculator() {
  const buttons = [
    {
      value: "C",
      type: "clear",
    },
    {
      value: "+-",
      type: "operator",
    },
    {
      value: "%",
      type: "operator",
    },
    {
      value: "/",
      type: "operator",
    },
    {
      value: "7",
      type: "number",
    },
    {
      value: "8",
      type: "number",
    },
    {
      value: "9",
      type: "number",
    },
    {
      value: "*",
      type: "operator",
    },
    {
      value: "4",
      type: "number",
    },
    {
      value: "5",
      type: "number",
    },
    {
      value: "6",
      type: "number",
    },
    {
      value: "-",
      type: "operator",
    },
    {
      value: "1",
      type: "number",
    },
    {
      value: "2",
      type: "number",
    },
    {
      value: "3",
      type: "number",
    },
    {
      value: "+",
      type: "operator",
    },
    {
      value: "0",
      type: "number",
    },
    {
      value: ".",
      type: "decimal",
    },
    {
      value: "=",
      type: "operator",
    },
  ]
  const [input, setInput] = useState("0");
  const [secondInput, setSecondInput] = useState("0");
  const [operator, setOperator] = useState(null);

  const handleUpdate = (value, type) => {
    switch(type){
      case "number":
        setInput(Number(input + value));
        break;
      case "clear":
        setInput("0");  
        break;
      case "operator":
        setOperator(value);
        console.log(value);
        break;
      case "decimal":
        setInput(input + value);
    }

  }

  const handleClick = (e) => {
   handleUpdate(e.target.textContent, e.target.name);
  }

  return (
    <div className="calculator">
      <Display input={input} />
      <div className="calculator__buttons">
        {buttons.map((button, index) => (
          <Button 
            value={button.value} 
            type={button.type}
            key={index}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  )
}
