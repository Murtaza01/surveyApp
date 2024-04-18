import React from "react";
import { ImSpinner2 } from "react-icons/im";
export default function Loading({ style, message }) {
  return (
    <div className={`${style}`}>
      <p>{message}</p>
      <ImSpinner2 className=" text-lg animate-spin" />
    </div>
  );
}
