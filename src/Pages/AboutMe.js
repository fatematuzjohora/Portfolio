import React from "react";
import BackButton from "./Share/BackButton";

const AboutMe = () => {
  return (
    <div className="py-16 px-14 flex items-center justify-center h-screen">
      <div
        className=" bg-cover flex flex-col items-center justify-center px-10 pt-10 pb-5 max-w-xl text-white"
        style={{ backgroundColor: "rgba(50, 123, 233, 0.1)" }}
      >
        <img
          src="https://i.ibb.co/kyy9YPt/pri-54119967.jpg"
          class="rounded-xl w-44 mb-2 mx-auto"
          alt="Avatar"
        />
        <h1 className="text-2xl font-bold mb-4"> Fatema Tuz-Johora </h1>
        <p className="mb-6 ">
          <span className="font-bold">Let's introduce myself:</span> I'd
          introduce myself as a Passionate coder.I hope to find what I am
          looking for in your startup, and I am ready to bring onboard
          everything I've learned.
        </p>
        <BackButton />
      </div>
    </div>
  );
};

export default AboutMe;
