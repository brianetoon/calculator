export default function Button(props) {
  let buttonClass = props.value === "=" ? "button equal-sign" : "button";

  return (
    <button className={buttonClass}>{props.value}</button>
  )
}
