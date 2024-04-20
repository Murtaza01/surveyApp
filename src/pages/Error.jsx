import React from "react";

export default function Error({ message, title, children }) {
  return (
    <div className="h-screen font-paragraph  center flex-col text-primary">
      {children}
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
