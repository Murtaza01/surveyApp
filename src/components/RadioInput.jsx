export default function RadioInput({ choice, index, onSet, userChoice }) {
  return (
    <label
      className={` capitalize py-1 rounded-sm px-3  ${
        userChoice === index ? "bg-accent" : "bg-paragraph/20"
      } shadow-inner `}
      htmlFor={choice}
      onClick={() => onSet(index)}
    >
      {choice}
      <input
        type="radio"
        name="choice"
        value={index}
        id={choice}
        className="invisible"
      />
    </label>
  );
}
