import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ol9crsm",
        "template_vrw29sf",
        form.current,
        "PvL5xoxa01iyRuDqp"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal("Send!", "Mail has been sended!", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="flex flex-col items-center">
      <div id="contactMe">
        <h1
          className="text-2xl font-semibold text-white text-center 
          font-sans"
        >
          Contact Me
        </h1>
        <div className=" h-1 bg-red-400 rounded-full"></div>
      </div>
      <div className=" p-6 rounded-lg  w-96  max-w-md">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group mb-6">
            <input
              required
              type="text"
              className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              name="from_name"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              required
              type="text"
              className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              name="user_subject"
              placeholder="Subject"
            />
          </div>
          <div className="form-group mb-6">
            <input
              required
              type="email"
              className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              name="user_email"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
              id="exampleFormControlTextarea13"
              rows="3"
              name="message"
              required
              placeholder="Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
