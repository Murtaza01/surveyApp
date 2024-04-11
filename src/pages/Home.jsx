import React from "react";

export default function Home({ onSet, children }) {
  return (
    <section className=" mt-[15vh]">
      <div className="py-8 px-2 text-center space-y-5 mx-auto">
        {children}
        <h1 className="text-heading">Welcome to Survey ...</h1>

        <p className="pb-2 text-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum
          necessitatibus magnam deserunt eaque id odio minus laborum, recusandae
          corrupti reiciendis porro blanditiis impedit iste, labore dignissimos
          illo. Similique, aliquam?
        </p>

        <button
          className="bg-accent  text-heading px-2 py-[3px] rounded-lg"
          onClick={() => onSet("Survey")}
        >
          Do the Survey
        </button>
      </div>
    </section>
  );
}
