export default function Button({value, type, handleClick}) {
  let buttonClass = value === "=" ? "button equal-sign" : "button";

  return (
    <button 
      className={buttonClass}
      onClick={handleClick}
      name={type}
    >
      {value}
    </button>
  )
}
