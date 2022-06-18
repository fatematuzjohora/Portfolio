import React from "react";

// import { useNavigate } from "react-router-dom";

const Banner = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <div class="w-full">
        <video class="w-full" autoPlay loop muted>
          <source
            src="https://mdbootstrap.com/img/video/Lines.mp4"
            type="video/mp4"
          />
        </video>
        <div
          class="absolute top-0 right-0 bottom-0 left-0 w-full h-full "
          style={{ backgroundColor: "rgba(50, 123, 233, 0.1)" }}
        >
          <div class="carousel-caption absolute top-11 sm:before:top-32 sm:top-40 md:top-28 lg:top-48 right-0 bottom-0 left-8 lg:left-14 ">
            <p>
              HI I'M
            </p>
            <h1 className=" text-xl xs:text-4xl sm:text-4xl md:text-6xl sm:flex-col sm:flex">
              <span>Fatema Tuz Johora </span>
            </h1>
            <h3 class="text-md mt-1 md:mt-5 ">
              MERN Stack Developer / Front End Development Expert
            </h3>
            <p className=" hidden md:block">
              I am a Web developer. Hard-working programmer with clear
              communication and active listening skills. <br /> I am so glad to
              you are here.
            </p>
            <a
              href={
                "https://drive.google.com/file/d/1K39NDnZXHXXV-7kj8Sw5Bqa5G8FSAD95/view"
              }
              target={"blank"}
              // onClick={() => navigate("/resume")}
              type="button"
              class="inline-block mt-1 md:mt-3 px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-blue-800 hover:bg-opacity-95 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
