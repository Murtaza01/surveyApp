import React from "react";
import Button from "../components/Button";

export default function Home({ onSet, children }) {
  return (
    <section className=" mt-[15vh]">
      <div className="py-8 px-2 text-center space-y-5 mx-auto">
        {children}
        <h1 className="text-heading">Welcome to Survey ...</h1>

        <p className=" text-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum
          necessitatibus magnam deserunt eaque id odio minus laborum, recusandae
          corrupti reiciendis porro blanditiis impedit iste, labore dignissimos
          illo. Similique, aliquam?
        </p>

        <Button
          handleClick={() => onSet("Survey")}
          style={"px-3 rounded-lg mt-5"}
        >
          Do the Survey
        </Button>
      </div>
    </section>
  );
}
