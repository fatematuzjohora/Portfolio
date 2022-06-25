import React from "react";
import { Typewriter } from "react-simple-typewriter";

// import { useNavigate } from "react-router-dom";

const Banner = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <div
        class="w-full h-full "
        style={{ backgroundColor: "rgba(50, 123, 233, 0.1)" }}
      >
        <div class="carousel-caption py-20 px-14">
          <p>HI I'M</p>
          <h1 className="text-xl xs:text-5xl sm:text-4xl md:text-6xl sm:flex-col sm:flex">
            <span>Fatema Tuz Johora </span>
          </h1>
          <h3 class="text-md mt-1 md:mt-5">
            <span>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "MERN Stack Developer 💻 / Front End Development Expert ",
                ]}
                loop={false}
                cursor
                cursorStyle="🖋"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </h3>
          <p className="my-4">
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
  );
};

export default Banner;
