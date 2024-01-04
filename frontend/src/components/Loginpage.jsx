import React from "react";

const Loginpage = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[rgb(255,7,73)]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[95%] h-[500px] sm:w-[800px] sm:h-[500px] bg-[rgb(255,255,255)]  grid grid-cols-6 shadow-xl">
            <div className=" hidden sm:block  sm:col-span-3 flex justify-center items-center relative">
              <a
                href="https://dribbble.com/antonakaze"
                className="text-white absolute bottom-1 left-2 "
              >
                Credit : Anton Kakhidze
              </a>
              <img
                className=" h-full object-cover"
                src="https://cdn.dribbble.com/userupload/2799905/file/original-980c2560b7bfe368d71b06cbd8596900.png?resize=2048x1535"
                alt=""
              />
            </div>
            <div className="w-full col-span-6 sm:w-full sm:col-span-3 px-[30px] py-[30px]">
              <p className="text-[20pt] text-[rgb(214,58,141)] pb-[30px]">
                Sign in
              </p>
              <div className="relative w-full">
                <p className="text-pink-700 ">Username</p>
                <input
                  type="text"
                  className="w-full h-[40px] pl-3 border border-[rgb(93,29,97)] outline-none"
                />
              </div>
              <div className="relative w-full pt-2">
                <p className="text-pink-700">Password</p>
                <input
                  type="text"
                  className="w-full h-[40px] pl-3 border border-[rgb(93,29,97)] outline-none"
                />
              </div>
              <div className="w-full pt-[30px] flex gap-2">

                <button className="text-white w-[50px] overflow-hidden h-[50px] bg-rose-500">
                  <img
                    src="https://i.pinimg.com/564x/e5/a8/89/e5a88919084d9fbdef6894618aa140ee.jpg"
                    alt=""
                  />
                </button>
                <button className="px-7 py-3 text-white bg-rose-500">
                  sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
