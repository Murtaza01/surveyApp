import React from "react";

export default function Heading({ children, style }) {
  return (
    <h2 className={`text-primary text-lg capitalize ${style} font-heading`}>
      {children}
    </h2>
  );
}
