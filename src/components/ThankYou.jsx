import { useRef } from "react";
import Button from "./Button";

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
    <div className="p-5">
      {children}
      <div className="center flex-col gap-3">
        <p>thank you for doing our survey</p>
        <label htmlFor="username">
          <input
            type="text"
            className="text-heading bg-paragraph/20 shadow-inner rounded-md px-2 py-1 outline-none"
            placeholder="Enter Your Name"
            id="username"
            ref={username}
          />
        </label>
        {/* <button onClick={handleInput}>Submit</button> */}
        <Button handleClick={handleInput} style="px-4 rounded-md">
          Submit
        </Button>
      </div>
    </div>
  );
}
