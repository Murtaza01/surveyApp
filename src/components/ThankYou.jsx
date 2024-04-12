import { useRef } from "react";

export default function ThankYou({ children, onSet, setUser }) {
  const username = useRef();

  function handleInput() {
    const name = username.current.value;
    setUser((prevResult) => ({
      ...prevResult,
      user: name,
    }));
    onSet("Results");
  }
  return (
    <div>
      {children}
      <label htmlFor="username">
        <input type="text" id="username" ref={username} />
      </label>
      <button onClick={handleInput}>Submit</button>
    </div>
  );
}
