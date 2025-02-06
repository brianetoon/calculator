import Display from "./Display"
import Button from "./Button"

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
      type: "operator",
    },
    {
      value: "=",
      type: "operator",
    },
  ]

  return (
    <div className="calculator">
      <Display />
      <div className="calculator__buttons">
        {buttons.map((button, index) => (
          <Button value={button.value} key={index}/>
        ))}
      </div>
    </div>
  )
}
