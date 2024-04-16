import React from "react";
import survey from "../assets/svg/thankyouFigureYellow.svg";

export default function ResultsCard({ avatar, prevTheme, children }) {
  return (
    <div className="border-2 h-20 px-1 text-sm flex items-center gap-1">
      <figure className="">
        <img src={survey} alt="" className="w-16  rounded-full border-2" />
      </figure>
      <div className="text-center grid grid-cols-2 place-items-center w-full   ">
        {children}
      </div>
    </div>
  );
}
