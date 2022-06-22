import React from "react";

const AboutMe = () => {
  return (
    <div className="py-16 px-14 flex items-center justify-center h-screen">
      <div
        className=" bg-cover flex flex-col items-center justify-center p-10 max-w-xl text-white"
        style={{ backgroundColor: "rgba(50, 123, 233, 0.1)" }}
      >
        <img
          src="https://i.ibb.co/kyy9YPt/pri-54119967.jpg"
          class="rounded-xl w-44 mb-2 mx-auto"
          alt="Avatar"
        />
        <h1 className="text-2xl font-bold mb-4"> Fatema Tuz-Johora </h1>
        <p>
          <span className="font-bold">
            MY DREAM AND GOALS FOR THE NEXT SIX MONTH:
          </span>{" "}
          My dream for the next six months is to establish myself as a web
          developer and for this I am working as my level best, hopefully in
          next six months I will be able to fulfill my dream.Keep me in your
          prayer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
