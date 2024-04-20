import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";

export default function Home({ onSet, children }) {
  return (
    <section className="min-h-[90vh] pt-[20vh] ">
      <div className="  center flex-col  gap-5 pb-5 px-2">
        {children}
        <Heading>Quality of Life Survey</Heading>

        <p className="text-secondary text-center font-paragraph">
          This survey consist of ten questions that is designed to give you an
          idea about your overall quality of life, try to select the options
          that best describe how you feel the past few weeks.
        </p>

        <Button
          handleClick={() => onSet("Survey")}
          style={"px-4 rounded-lg mt-3"}
        >
          Do the Survey
        </Button>
      </div>
    </section>
  );
}
