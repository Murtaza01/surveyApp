export default function Label({ choice, index, onSet, userChoice }) {
  return (
    <label
      className={`border-2 ${userChoice === index ? "bg-red-300" : null} `}
      htmlFor={choice}
      onClick={() => onSet(index)}
    >
      {choice}
      <input
        type="radio"
        name="choice"
        value={index}
        id={choice}
        className=" invisible"
      />
    </label>
  );
}
