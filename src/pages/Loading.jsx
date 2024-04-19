import React from "react";
import { ImSpinner2 } from "react-icons/im";
export default function Loading({ message }) {
  return (
    <div className=" h-screen center flex-col gap-3 text-heading bg-background">
      <p>{message}</p>
      <ImSpinner2 className=" text-lg animate-spin" />
    </div>
  );
}
