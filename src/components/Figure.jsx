import React from "react";

export default function Figure({ prevTheme, figureLight, figureDark }) {
  return (
    <figure className="w-full pb-2">
      <img
        src={prevTheme === "dark" ? figureDark : figureLight}
        alt=""
        className="w-52 mx-auto"
      />
    </figure>
  );
}
