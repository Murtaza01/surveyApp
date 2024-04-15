import { useRef } from "react";
import Button from "./Button";

export default function ThankYou({ children, onSet, setUser }) {
  const username = useRef();
  const userSelect = useRef();

  function handleInput() {
    const name = username.current.value;
    const gender = userSelect.current.value;
    setUser((prevResult) => ({
      ...prevResult,
      user: name || "unknown",
      gender: gender,
    }));
    onSet("Results");
  }
  return (
    <div className="p-5">
      {children}
      <div className="center flex-col gap-3 ">
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
        <select
          name="gender"
          id="gender"
          className="*:bg-background/85 *:text-heading  bg-paragraph/20 rounded-sm outline-none border-none"
          ref={userSelect}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option
            value="non Binary"
            className=" disabled:text-heading/10"
            disabled
          >
            Non Binary
          </option>
        </select>

        <Button handleClick={handleInput} style="px-4 rounded-md">
          Submit
        </Button>
      </div>
    </div>
  );
}
