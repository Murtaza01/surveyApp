import React from "react";

export default function Error({ message, title, children }) {
  return (
    <div className="h-screen center flex-col text-heading">
      {children}
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
