import { useRef } from "react";
import Button from "./Button";

export default function ThankYou({ children, onSet, setUser }) {
  const username = useRef();
  const userSelect = useRef();
  const userAge = useRef();

  function handleInput() {
    const name = username.current.value;
    const gender = userSelect.current.value;
    const age = userAge.current.value;
    setUser((prevResult) => ({
      ...prevResult,
      user: name || "unknown",
      gender: gender,
      age: age || "-",
    }));
    onSet("Results");
  }
  return (
    <div className="p-5 ">
      {children}
      <div className="center flex-col gap-3">
        <p className="text-center w-11/12">
          Thank you for doing our survey, please enter your name age and gender
          below to see your results.
        </p>
        <label htmlFor="username">
          <input
            type="text"
            className="bg-paragraph/20 shadow-inner rounded-md px-2 py-1 outline-none"
            placeholder="Enter Your Name"
            id="username"
            ref={username}
          />
        </label>
        <div className="center gap-5">
          <select
            name="gender"
            id="gender"
            className="*:bg-background/85  bg-paragraph/20 rounded-md outline-none border-none "
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

          <input
            ref={userAge}
            placeholder="Your Age"
            type="text"
            className="px-2 w-20 bg-paragraph/20  rounded-md outline-none border-none shadow-inner"
          />
        </div>
        <Button handleClick={handleInput} style="px-4 rounded-md">
          Submit
        </Button>
      </div>
    </div>
  );
}
