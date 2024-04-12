import React from "react";

export default function Error({ message, title, theme, children }) {
  return (
    <div
      className={`h-screen center flex-col ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      {children}
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
