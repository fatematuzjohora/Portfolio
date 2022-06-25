import React from "react";
import { useNavigate } from "react-router-dom";

const ClientsReviews = () => {
  const navigate = useNavigate();
  return (
    <div className=" p-5 md:p-20">
      <h1
        className="text-2xl font-semibold text-white text-center 
       pb-5 font-sans"
      >
        Clients Reviews
      </h1>
      <div
        id="carouselExampleCaptions"
        class="carousel slide relative carousel-dark md:p-10"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full text-center">
            <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Consectetur adipisicing elit. Fugit, error amet numquam iure
              provident voluptate esse quasi, voluptas nostrum quisquam!"
            </p>
            <div class="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                class="rounded-full w-24 h-24 shadow-lg"
                alt="smapleImage"
              />
            </div>
            <p class="text-gray-500">- Anna Morian</p>
          </div>
          <div class="carousel-item relative float-left w-full text-center">
            <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Neque cupiditate assumenda in maiores repudiandae mollitia
              adipisci maiores repudiandae mollitia consectetur adipisicing
              architecto elit sed adipiscing elit."
            </p>
            <div class="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                class="rounded-full w-24 h-24 shadow-lg"
                alt="smapleImage"
              />
            </div>
            <p class="text-gray-500">- Teresa May</p>
          </div>
          <div class="carousel-item relative float-left w-full text-center">
            <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur est laborum neque
              cupiditate assumenda in maiores."
            </p>
            <div class="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                class="rounded-full w-24 h-24 shadow-lg"
                alt="clients reviews"
              />
            </div>
            <p class="text-gray-500">- Smith Jhon</p>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className=" flex justify-center items-center">
        <button
          onClick={() => navigate("/blogs")}
          className="text-center btn text-white mt-1 md:mt-3 px-6 py-2 border-2 border-blue-400  font-medium text-xs leading-tight uppercase rounded-lg hover:bg-blue-800 hover:bg-opacity-95 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in"
        >
          Add Review
        </button>
      </div>
    </div>
  );
};

export default ClientsReviews;
