import React from "react";
import Button from "../components/Button";

export default function Home({ onSet, children }) {
  return (
    <section className="mt-[18vh] min-[400px]:mt-[16vh] ">
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
          style={"px-4 rounded-lg mt-8"}
        >
          Do the Survey
        </Button>
      </div>
    </section>
  );
}
