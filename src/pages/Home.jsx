import React from "react";
import Button from "../components/Button";

export default function Home({ onSet, children }) {
  return (
    <section className="min-h-[90vh] pt-[20vh] ">
      <div className="  center flex-col  gap-5 pb-5 px-2">
        {children}
        <h1 className="text-heading">Welcome to Survey ...</h1>

        <p className=" text-paragraph text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum
          necessitatibus magnam deserunt eaque id odio minus laborum, recusandae
          corrupti reiciendis porro blanditiis impedit iste, labore dignissimos
          illo. Similique, aliquam?
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
