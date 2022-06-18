import React from "react";

const Technology = ({ technology }) => {
  const { FrontEnd, BackEnd } = technology;
  return (
    <div>
      <div className=" my-4">
        {FrontEnd && (
          <div>
            <h3 className="">
              <span className="text-white font-semibold text-md border-b border-amber-500">
                Front-End :
              </span>{" "}
              {FrontEnd?.map((front) => (
                <span className=" text-white border bg-orange-400 rounded-full my-2 px-2 border-sky-500  mr-1">
                  {front}
                </span>
              ))}
            </h3>
          </div>
        )}
      </div>
      <div>
        {BackEnd && (
          <div>
            <h3>
              <span className="text-white font-semibold text-md border-b border-amber-500">
                Back-End :{" "}
              </span>
              {BackEnd?.map((back) => (
                <span className=" text-white border bg-orange-400 rounded-full px-2 my-2 border-sky-500 mr-1 ">
                  {" "}
                  {back}
                </span>
              ))}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Technology;
