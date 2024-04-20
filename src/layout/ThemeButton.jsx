import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";

export default function ThemeButton({ theme, onSet }) {
  const dark = theme === "dark" ? true : false;

  return (
    <div className="absolute right-2 top-3">
      <div
        onClick={() =>
          onSet((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
        }
        className={`cursor-pointer transition-color py-2  duration-500 px-2  relative rounded-full 
       w-[4.1rem]  text-background bg-primary shadow-sm shadow-primary`}
      >
        <span className="flex justify-between  ">
          <FaRegMoon />
          <IoSunnyOutline />
        </span>
        <span
          className={`absolute transition-transform duration-500 ${
            dark ? " translate-x-7" : "translate-x-[-6px]"
          } rounded-xl w-[40%] h-[80%] top-1  bg-accent`}
        ></span>
      </div>
    </div>
  );
}
