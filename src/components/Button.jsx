import React from "react";

export default function Button({ onDisable, handleClick, children, style }) {
  return (
    <button
      className={`bg-accent text-heading ${style} py-[2px] disabled:bg-accent/30 disabled:text-heading/40`}
      disabled={onDisable === null}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
