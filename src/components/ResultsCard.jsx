import React from "react";
import maleYellow from "../assets/svg/maleAvatarYellow.svg";
import maleViolet from "../assets/svg/maleAvatarViolet.svg";
import femaleYellow from "../assets/svg/femaleAvatarYellow.svg";
import femaleViolet from "../assets/svg/femaleAvatarViolet.svg";

export default function ResultsCard({ gender, theme, children }) {
  const maleAvatar = theme === "light" ? maleYellow : maleViolet;
  const femaleAvatar = theme === "light" ? femaleYellow : femaleViolet;
  // const maleAvatar = gender === "male"  ? themedAvatar : ""
  return (
    <div className=" shadow-customSh h-20 px-2 text-sm flex items-center gap-1">
      <figure className="">
        <img
          src={gender === "male" ? maleAvatar : femaleAvatar}
          alt=""
          className="w-20  rounded-full  shadow-sm shadow-primary/80"
        />
      </figure>
      <div className="text-center grid grid-cols-2 place-items-center w-full   ">
        {children}
      </div>
    </div>
  );
}
